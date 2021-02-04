import React from 'react'
import {Typography} from "@material-ui/core";

function Loading(props) {
  const {
    msg
  } = props

  return <Typography>Loading {msg}</Typography>
}

export default Loading