use polars::prelude::*;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize)]
pub struct DataSummary {
    pub total_rows: usize,
    pub total_columns: usize,
    pub column_info: Vec<ColumnInfo>,
    pub missing_values: HashMap<String, usize>,
    pub numeric_summary: HashMap<String, NumericStats>,
}

#[derive(Serialize, Deserialize)]
pub struct ColumnInfo {
    pub name: String,
    pub data_type: String,
    pub non_null_count: usize,
}

#[derive(Serialize, Deserialize)]
pub struct NumericStats {
    pub mean: f64,
    pub median: f64,
    pub std_dev: f64,
    pub min: f64,
    pub max: f64,
}

pub fn analyze_csv(file_path: &str) -> Result<DataSummary, PolarsError> {
    // Read CSV file
    let df = CsvReader::from_path(file_path)?.finish()?;

    let total_rows = df.height();
    let total_columns = df.width();

    // Collect column information
    let mut column_info = Vec::new();
    let mut missing_values = HashMap::new();
    let mut numeric_summary = HashMap::new();

    for col in df.get_columns() {
        let col_name = col.name().to_string();
        let data_type = format!("{:?}", col.dtype());
        let non_null_count = col.len() - col.null_count();

        column_info.push(ColumnInfo {
            name: col_name.clone(),
            data_type: data_type.clone(),
            non_null_count,
        });

        // Track missing values
        let null_count = col.null_count();
        if null_count > 0 {
            missing_values.insert(col_name.clone(), null_count);
        }

        // Calculate numeric statistics for numeric columns
        if col.dtype().is_numeric() {
            if let Ok(series) = col.cast(&DataType::Float64) {
                let mean_val = series.mean().unwrap_or(0.0);
                let median_val = series.median().unwrap_or(0.0);
                
                // Get min and max safely
                let min_val = if let Ok(Some(min)) = series.min::<f64>() {
                    min
                } else {
                    0.0
                };
                
                let max_val = if let Ok(Some(max)) = series.max::<f64>() {
                    max
                } else {
                    0.0
                };

                let stats = NumericStats {
                    mean: mean_val,
                    median: median_val,
                    std_dev: 0.0,
                    min: min_val,
                    max: max_val,
                };
                numeric_summary.insert(col_name.clone(), stats);
            }
        }
    }

    Ok(DataSummary {
        total_rows,
        total_columns,
        column_info,
        missing_values,
        numeric_summary,
    })
}
