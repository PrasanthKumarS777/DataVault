mod api;
mod etl;

use axum::{
    routing::{get, post},
    Router,
    Json,
};
use serde::Serialize;
use std::net::SocketAddr;
use tower_http::cors::CorsLayer;

#[derive(Serialize)]
struct HealthResponse {
    status: String,
    service: String,
    version: String,
}

#[derive(Serialize)]
struct RootResponse {
    message: String,
    service: String,
    endpoints: Vec<String>,
}

#[tokio::main]
async fn main() {
    // Initialize logging
    tracing_subscriber::fmt::init();

    // Load environment variables
    dotenv::dotenv().ok();

    // Build router with CORS for future frontend
    let app = Router::new()
        .route("/", get(root))
        .route("/health", get(health_check))
        .route("/api/upload", post(api::upload_csv))
        .route("/api/analyze", post(api::analyze_data))
        .layer(CorsLayer::permissive());

    // Start server
    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    tracing::info!("🚀 DataVault API server running on http://{}", addr);
    tracing::info!("📊 Ready to process data securely");
    tracing::info!("📁 Upload endpoint: POST /api/upload");
    tracing::info!("🔍 Analyze endpoint: POST /api/analyze");

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn root() -> Json<RootResponse> {
    Json(RootResponse {
        message: "Welcome to DataVault API - CSV Data Analyzer".to_string(),
        service: "datavault".to_string(),
        endpoints: vec![
            "GET  /health".to_string(),
            "POST /api/upload".to_string(),
            "POST /api/analyze".to_string(),
        ],
    })
}

async fn health_check() -> Json<HealthResponse> {
    Json(HealthResponse {
        status: "healthy".to_string(),
        service: "DataVault".to_string(),
        version: "0.1.0".to_string(),
    })
}
