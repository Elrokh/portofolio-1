import fashionStore from "/projects/fashion-store.svg?url";
import medicalHub from "/projects/medical-hub.svg?url";
import organicCover from "/projects/organic-cover.svg?url";
import pharmaguideBrand from "/projects/pharmaguide-brand.svg?url";
import restaurantSystem from "/projects/restaurant-system.svg?url";
import socialCampaign from "/projects/social-campaign.svg?url";

const bundledProjectImages = {
  "fashion-store.svg": fashionStore,
  "medical-hub.svg": medicalHub,
  "organic-cover.svg": organicCover,
  "pharmaguide-brand.svg": pharmaguideBrand,
  "restaurant-system.svg": restaurantSystem,
  "social-campaign.svg": socialCampaign,
};

export function assetUrl(source) {
  if (!source || typeof source !== "string") return source;

  // Data URLs, blob previews, imported Vite assets and remote images already
  // have a complete URL. Only public-folder paths need the deployment base.
  if (/^(?:data:|blob:|https?:\/\/)/i.test(source) || source.includes("/assets/")) {
    return source;
  }

  const projectFile = source.split("/").pop();
  if (bundledProjectImages[projectFile]) return bundledProjectImages[projectFile];

  if (source.startsWith("/")) {
    const base = import.meta.env.BASE_URL || "./";
    return `${base}${source.slice(1)}`;
  }

  return source;
}
