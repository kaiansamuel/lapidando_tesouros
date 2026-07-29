export function normalizeSiteUrl(value: string | undefined) {
  const normalizedValue = value?.trim();

  if (!normalizedValue) {
    return undefined;
  }

  const url = new URL(normalizedValue);

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL deve usar http ou https.");
  }

  return url.toString().replace(/\/+$/, "");
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const isPublicSite = Boolean(siteUrl);
