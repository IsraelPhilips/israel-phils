/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_CALENDLY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

