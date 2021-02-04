import React, {useEffect, useState} from 'react'
import {Paper, Typography} from "@material-ui/core";
import {map} from "rxjs/operators";
import {getItem, parseDescriptor} from "@craftercms/content";
import {renderToStorageUrl_local} from "./util";
import Loading from "./Loading";

function PageByUrl(props) {

  const [data, setData] = useState(null)

  useEffect((e) => {
    const storeUrl = renderToStorageUrl_local("/")
    if (!data) {
      getItem(storeUrl).pipe(
        map(parseDescriptor)
      ).subscribe((content) => {
        setData(content)
      });
    }
  }, [data, setData])

  if (!data) return <Loading msg={"global home page "}/>
  else return <Paper style={{marginBottom : 15, padding: 15}}>
    <Typography variant={"h3"}>{data.title_t}</Typography>
    <Typography variant={"body2"}><span  dangerouslySetInnerHTML={{__html: data.body_html}}></span></Typography>
  </Paper>
}

export default PageByUrl