
export function storageToRenderUrl_local(storageUrl) {
  // /site/website/some/path/etc/index.xml
  if (!storageUrl) return null
  if (!storageUrl.startsWith("/site/website")) return null
  if (!storageUrl.endsWith("/index.xml")) return null
  const res = storageUrl.substring("/site/website".length, storageUrl.length - "index.xml".length - 1)
  return res === "" ? "/" : res // special treatment for home page
}

export function renderToStorageUrl_local(renderUrl) {
  if (!renderUrl) return null
  if (renderUrl === "/") return "/site/website/index.xml" // no double-slashes
  return "/site/website" + renderUrl + "/index.xml"
}
