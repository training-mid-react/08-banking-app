/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_BANK_URL: string  
  readonly VITE_LLAVESIMETRICA: string
  readonly VITE_VECTORINICIALIZACION: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}