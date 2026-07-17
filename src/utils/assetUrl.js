export function assetUrl(source) {
  if (!source || typeof source !== "string") return source;

  // Data URLs, blob previews, imported Vite assets and remote images already
  // have a complete URL. Only public-folder paths need the deployment base.
  if (/^(?:data:|blob:|https?:\/\/)/i.test(source) || source.includes("/assets/")) {
    return source;
  }

  if (source.startsWith("/")) {
    const base = import.meta.env.BASE_URL || "./";
    return `${base}${source.slice(1)}`;
  }

  return source;
}
