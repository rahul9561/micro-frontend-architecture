import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        chatApp: "http://localhost:5001/assets/remoteEntry.js",
        emailApp: "http://localhost:5002/assets/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/design-system/Button.jsx", // Ensure file has .jsx extension
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0",
          strictVersion: false,
          eager: true, // Important: This prevents esbuild errors
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0",
          strictVersion: false,
          eager: true,
        },
      },
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
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    cors: true,
  },
});
