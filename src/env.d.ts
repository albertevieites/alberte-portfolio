/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly PUBLIC_GA_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
