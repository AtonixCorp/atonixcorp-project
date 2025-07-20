module.exports = {
  apps: [
    {
      name: "atonix-prod-dashboard-frontend",
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 6000
      }
    }
  ]
};