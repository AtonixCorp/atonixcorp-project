pub mod user;

pub fn dispatch(command: &str, args: &[&str]) {
    match command {
        "user" => {
            match args {
                ["add", username] => user::add_user(username),
                ["delete", username] => user::delete_user(username),
                ["list"] => user::list_users(),
                _ => println!("Usage: user add|delete|list <username>"),
            }
        }
        _ => println!("Unknown command: {}", command),
    }
}