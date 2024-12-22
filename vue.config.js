const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: {
        protocol: "wss", // Use Secure WebSocket
        hostname: "0.0.0.0", // Use a generic hostname
      },
    },
  },
  publicPath: "./",
});
