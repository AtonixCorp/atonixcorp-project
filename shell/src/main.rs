use std::io::{self, Write};

// AtonixCorp Cloud Shell CLI
// This CLI allows users to interact with AtonixCorp services from the command line.
// It provides commands to check the health of various services like auth, mail, and dns.

use clap::{Arg, Command};
use reqwest;
use std::error::Error;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let matches = Command::new("atonixcorpctl")
        .version("0.1.0")
        .author("AtonixCorp Dev Team")
        .about("AtonixCorp Cloud Shell")
        .subcommand(
            Command::new("status")
                .about("Check service health")
                .arg(Arg::new("service").required(true).help("Service name")),
        )
        .get_matches();

    if let Some(sub) = matches.subcommand_matches("status") {
        let service = sub.get_one::<String>("service").unwrap();
        let url = match service.as_str() {
            "auth" => "http://localhost:3000/health",
            "mail" => "http://localhost:3010/health",
            "dns" => "http://localhost:3020/health",
            _ => {
                println!("Unknown service: {}", service);
                return Ok(());
            }
        };

        match reqwest::get(url).await {
            Ok(resp) if resp.status().is_success() => {
                let body = resp.text().await?;
                println!("[✓] {} is healthy: {}", service, body);
            }
            Ok(resp) => {
                println!("[!] {} responded with status: {}", service, resp.status());
            }
            Err(err) => {
                println!("[x] Failed to reach {}: {}", service, err);
            }
        }
    }

    Ok(())
}