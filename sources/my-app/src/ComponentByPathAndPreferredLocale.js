import React from 'react'
import ComponentByPath from "./ComponentByPath";

function ComponentByPathAndPreferredLocale(props) {
  const {
    path,
    locale
  } = props
// /site/components/en/left-rails/left-rail-with-no-articles.xml
  if (!path) return null;
  if (!path.startsWith("/site/components/")) return null;
  return <ComponentByPath path={path.substring(0,17) + locale + path.substring(19)} />
}

export default ComponentByPathAndPreferredLocale