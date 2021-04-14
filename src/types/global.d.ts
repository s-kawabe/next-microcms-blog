declare namespace NodeJS {
  interface ProcessEnv {
    readonly MICRO_CMS_API_ENDPOINT: string;
    readonly MICRO_CMS_API_KEY: string;
  }
}