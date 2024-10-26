/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CarVerse_Database_KEY: string; // Define other environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  