import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "chatApp",
      filename: "remoteEntry.js", // This should match the path in your main app's config
      exposes: {
        "./ChatApp": "./src/App", // Ensure this path is correct
      },
      remotes: {
        mainApp: "http://localhost:5000/assets/remoteEntry.js", // Add main-app as remote
      },
      shared: ['react', 'react-dom'],
    }),
    {
      name:'vite-plugin-notify-host-on-rebuild',
      apply(config,{command}){
        return Boolean (command === 'build' && config.build?.watch);
      },
      async buildEnd(error){
        if(!error){
          try {
            await fetch('http://localhost:5000/__fullReload');
          } catch (e) {
            console.log(e)
          }
        }
      }
    },
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001, // Ensure this is set to the correct port
    cors: true,
  
  },
});
