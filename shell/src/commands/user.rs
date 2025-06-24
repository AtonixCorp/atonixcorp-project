use std::process::Command;
use std::fs;

pub fn add_user(username: &str) {
    let base_path = format!("/AtonixCorpvm/atonixcorp/home/{}", username);

    // Create the target directory if missing
    if let Err(e) = fs::create_dir_all(&base_path) {
        eprintln!("❌ Failed to create home directory: {}", e);
        return;
    }

    // Run useradd with custom home
    let status = Command::new("sudo")
        .args(&["useradd", "-m", "-d", &base_path, username])
        .status();

    match status {
        Ok(code) if code.success() => {
            // Fix ownership
            let _ = Command::new("sudo")
                .args(&["chown", "-R", &format!("{}:{}", username, username), &base_path])
                .status();
            println!("✅ User '{}' created at {}", username, base_path);
        }
        Ok(code) => {
            eprintln!("⚠️ useradd exited with: {}", code);
        }
        Err(e) => {
            eprintln!("❌ Failed to run useradd: {}", e);
        }
    }
}

pub fn delete_user(username: &str) {
    let status = Command::new("sudo")
        .args(&["userdel", "-r", username])
        .status();

    match status {
        Ok(code) if code.success() => {
            println!("🗑️  User '{}' deleted successfully.", username);
        }
        Ok(code) => {
            eprintln!("⚠️  userdel exited with code {}", code);
        }
        Err(err) => {
            eprintln!("❌ Failed to run userdel: {}", err);
        }
    }
}