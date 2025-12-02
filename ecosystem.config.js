module.exports = {
  apps: [
    {
      name: "my-node-backend",
      script: "app.js",
      watch: false,
      env: {
        PORT: 3000
      }
    }
  ]
};