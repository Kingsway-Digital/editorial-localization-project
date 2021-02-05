
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

export function localeFromPath(path) {
  if (!path) return null
  if (!path.startsWith("/site")) return null;
  if (!path.endsWith(".xml")) return null;
  if (path.startsWith("/site/website/")) {
    return path.substring(14,16)
  } else if (path.startsWith("/site/components/")) {
    return path.substring(17,19)
  } else {
    return null
  }
}

export function overrideLocale(path, locale) {
  if (!path) return null
  if (!locale) return path
  const ploc = localeFromPath(path)
  if (!ploc) return path
  return path.replace("/" + ploc +"/", "/" + locale +"/")
}