import React, {useEffect, useState} from 'react'
import {Paper, Typography} from "@material-ui/core";
import {map} from "rxjs/operators";
import {getItem, parseDescriptor} from "@craftercms/content";
import Loading from "./Loading";

function ComponentByPath(props) {
  const {
    path
  } = props


  const [data, setData] = useState(null)

  useEffect((e) => {
    if (!data) {
      console.log("getting item")
      getItem(path).pipe(
        map(parseDescriptor)
      ).subscribe((content) => {
        setData(content)
        console.log("got item", content)
      });
    }
  }, [path, data, setData])

  if (!data) return <Loading msg={"component by path " + path}/>
  else return <Paper style={{marginBottom: 15, padding: 15}}>
    <Typography variant={"h4"}>{data.craftercms.label}</Typography>
    <Typography variant={"h5"}>Requested: {path}</Typography>
    <Typography variant={"h5"}>Returned:   {data.craftercms.path}</Typography>
    <Typography variant={"h5"}>Content Type: {data.craftercms.contentTypeId}</Typography>
    <Typography variant={"body2"}><strong>Entire Object:</strong> {JSON.stringify(data)}</Typography>
  </Paper>
}

export default ComponentByPath