import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {crafterConf} from "@craftercms/classes";

const baseUrlFromEnv = process.env.REACT_APP_STUDIO_BASE_URL
const baseUrlFromCrafter = extractPassedFreemarkerConfig( "b")

const siteNameFromEnv = process.env.REACT_APP_STUDIO_SITE_NAME
const siteNameFromCrafter = extractPassedFreemarkerConfig("s")

if (!siteNameFromEnv && !siteNameFromCrafter) {
  alert("Configuration error")
  console.error("Site name not set")
} else if (siteNameFromCrafter && !baseUrlFromCrafter) {
  // if crafter provided the site it better provide the base URL
  alert("Configuration error")
  console.error("Base url not set");
} else {
  const site = siteNameFromCrafter ? siteNameFromCrafter : siteNameFromEnv
  const baseUrl = baseUrlFromCrafter ? baseUrlFromCrafter
    : (baseUrlFromEnv?baseUrlFromEnv:"")
  crafterConf.configure({ baseUrl: baseUrl, site: site } );
  ReactDOM.render( <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('root')
  );
}

function extractPassedFreemarkerConfig(param) {
  const theElement = document.getElementById("root")
  const val = theElement.dataset[param]
  theElement.dataset[param] = ''
  if (val && val.startsWith("${") && val.endsWith("}")) return null
  return val;
}