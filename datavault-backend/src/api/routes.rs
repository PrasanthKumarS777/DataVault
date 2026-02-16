use axum::{
    extract::Multipart,
    http::StatusCode,
    Json,
    response::IntoResponse,
};
use serde::{Deserialize, Serialize};
use std::path::Path;
use tokio::fs;
use tokio::io::AsyncWriteExt;

use crate::etl::analyze_csv;

#[derive(Serialize, Deserialize)]
pub struct UploadResponse {
    pub success: bool,
    pub message: String,
    pub file_name: String,
}

#[derive(Serialize, Deserialize)]
pub struct AnalysisResponse {
    pub success: bool,
    pub data: Option<crate::etl::DataSummary>,
    pub error: Option<String>,
}

#[derive(Deserialize)]
pub struct AnalyzeRequest {
    pub file_name: String,
}

pub async fn upload_csv(mut multipart: Multipart) -> impl IntoResponse {
    // Create data directory if it doesn't exist
    if fs::create_dir_all("data").await.is_err() {
        return (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(UploadResponse {
                success: false,
                message: "Failed to create data directory".to_string(),
                file_name: String::new(),
            }),
        );
    }

    while let Some(field) = multipart.next_field().await.unwrap() {
        let file_name = field.file_name().unwrap_or("unknown").to_string();
        let data = field.bytes().await.unwrap();

        // Save file to data folder
        let file_path = format!("data/{}", file_name);
        let mut file = match fs::File::create(&file_path).await {
            Ok(f) => f,
            Err(_) => {
                return (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    Json(UploadResponse {
                        success: false,
                        message: "Failed to create file".to_string(),
                        file_name: String::new(),
                    }),
                );
            }
        };

        if file.write_all(&data).await.is_err() {
            return (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(UploadResponse {
                    success: false,
                    message: "Failed to write file".to_string(),
                    file_name: String::new(),
                }),
            );
        }

        tracing::info!("📁 File uploaded: {}", file_name);

        return (
            StatusCode::OK,
            Json(UploadResponse {
                success: true,
                message: "File uploaded successfully".to_string(),
                file_name,
            }),
        );
    }

    (
        StatusCode::BAD_REQUEST,
        Json(UploadResponse {
            success: false,
            message: "No file provided".to_string(),
            file_name: String::new(),
        }),
    )
}

pub async fn analyze_data(Json(payload): Json<AnalyzeRequest>) -> impl IntoResponse {
    let file_path = format!("data/{}", payload.file_name);

    // Check if file exists
    if !Path::new(&file_path).exists() {
        return (
            StatusCode::NOT_FOUND,
            Json(AnalysisResponse {
                success: false,
                data: None,
                error: Some("File not found".to_string()),
            }),
        );
    }

    // Analyze the CSV
    match analyze_csv(&file_path) {
        Ok(summary) => {
            tracing::info!("📊 Analysis complete for: {}", payload.file_name);
            (
                StatusCode::OK,
                Json(AnalysisResponse {
                    success: true,
                    data: Some(summary),
                    error: None,
                }),
            )
        }
        Err(e) => {
            tracing::error!("❌ Analysis failed: {:?}", e);
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(AnalysisResponse {
                    success: false,
                    data: None,
                    error: Some(format!("Analysis failed: {}", e)),
                }),
            )
        }
    }
}
