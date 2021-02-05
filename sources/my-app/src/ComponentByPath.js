import React, {useEffect, useState} from 'react'
import {Typography} from "@material-ui/core";
import {map} from "rxjs/operators";
import {getItem, parseDescriptor} from "@craftercms/content";
import Loading from "./Loading";
import ComponentByPathAndPreferredLocale from "./ComponentByPathAndPreferredLocale";
import {localeFromPath} from "./util";

function ComponentByPath(props) {
  const {
    path
  } = props


  const [data, setData] = useState(null)

  useEffect((e) => {
    if (!data) {
      getItem(path).pipe(
        map(parseDescriptor)
      ).subscribe((content) => {
        setData(content)
        console.log("loaded crafter component", content)
      });
    }
  }, [path, data, setData])

  if (!data) return <Loading msg={"component by path " + path}/>
  else {
    const preferredLocale = localeFromPath(path)
    const lro = data['left-rail_o']
    let lr = undefined;
    if (lro!== undefined) {
      lr = lro[0]
    }
    const highlight = path !== data.craftercms.path
    return <div style={{marginBottom: 15, padding: 15}}>
      <Typography variant={"h4"}>{data.craftercms.label}</Typography>
      {highlight?<Typography variant={"h5"} color={"secondary"}>Item not found in requested locale - falling back.</Typography>:""}
      <Typography variant={"h5"}>Requested: {path}</Typography>
      <Typography variant={"h5"}>Returned:   {data.craftercms.path}</Typography>
      <Typography variant={"h5"}>Content Type: {data.craftercms.contentTypeId}</Typography>
      <Typography variant={"body2"}><strong>Entire Object:</strong> {JSON.stringify(data)}</Typography>
      <ComponentByPathAndPreferredLocale path={lr?.craftercms.path} locale={preferredLocale} />
    </div>
  }
}

export default ComponentByPath