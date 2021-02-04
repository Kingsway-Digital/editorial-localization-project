import React from 'react'
import {renderToStorageUrl_local} from "./util";
import ComponentByPath from "./ComponentByPath";

function PageByUri(props) {
  const {
    uri
  } = props

  return <ComponentByPath path={renderToStorageUrl_local(uri)}/>
}

export default PageByUri