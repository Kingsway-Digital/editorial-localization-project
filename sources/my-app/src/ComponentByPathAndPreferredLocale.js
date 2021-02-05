import React from 'react'
import ComponentByPath from "./ComponentByPath";
import {Typography} from "@material-ui/core";
import {overrideLocale} from "./util";

function ComponentByPathAndPreferredLocale(props) {
  const {
    path,
    locale
  } = props

  if (!path) return null;

  const overridePath = overrideLocale(path, locale)

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