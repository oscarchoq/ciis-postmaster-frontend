export function getValidUrl (url: string): string {
  if (!url) return "#";
  
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  
  return "#";
};
