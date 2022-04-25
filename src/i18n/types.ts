export type BundledResources = Record<string, Record<string, string>>;

export type StaticBundled = Record<string, BundledResources | Record<string, string> | string>;
