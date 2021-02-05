import React from 'react'
import ComponentByPath from "./ComponentByPath";
import {Typography} from "@material-ui/core";

function ComponentByPathAndPreferredLocale(props) {
  const {
    path,
    locale
  } = props
// /site/components/en/left-rails/left-rail-with-no-articles.xml
  if (!path) return null;
  if (!path.startsWith("/site/components/")) return null;
  const overridePath = path.substring(0,17) + locale + path.substring(19)
  if (overridePath !== path) {
    return <>
      <Typography variant={"h5"} color={"primary"}>
        App overriding wired relationship to seek locale <em><u>{locale}</u></em> for {path}
      </Typography>
      <ComponentByPath path={overridePath} />
    </>
  } else {
    return <ComponentByPath path={path} />
  }
}

export default ComponentByPathAndPreferredLocale