/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly JWT_SECRET_KEY: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }