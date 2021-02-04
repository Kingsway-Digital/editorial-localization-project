import React, {useEffect, useState} from 'react'
import {Paper, Typography} from "@material-ui/core";
import {map} from "rxjs/operators";
import {getItem, parseDescriptor} from "@craftercms/content";
import {renderToStorageUrl_local} from "./util";
import Loading from "./Loading";

function PageByUrl(props) {
  const {
    pageUrl
  } = props


  const [data, setData] = useState(null)

  useEffect((e) => {
    const storeUrl = renderToStorageUrl_local(pageUrl)
    console.log("page url", pageUrl)
    console.log("store url", storeUrl)
    if (!data) {
      console.log("getting item")
      getItem(storeUrl).pipe(
        map(parseDescriptor)
      ).subscribe((content) => {
        setData(content)
        console.log("got item", content)
      });
    }
  }, [pageUrl, data, setData])

  if (!data) return <Loading msg={"page by url "+pageUrl}/>
  else return <Paper style={{marginBottom : 15, padding: 15}}>
    <Typography variant={"h3"}><strong>{pageUrl}</strong> : {data.craftercms.label}</Typography>
    <Typography variant={"h4"}>Title: {data.title_t} </Typography>
    <Typography variant={"h5"}>Storage: {data.craftercms.path}</Typography>
    <Typography variant={"body2"}><strong>Full page content:</strong> {JSON.stringify(data)}</Typography>
  </Paper>
}

export default PageByUrl