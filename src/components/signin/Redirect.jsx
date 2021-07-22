import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Loading from '../Loading'

function Redirect(props) {
  if (props.signedIn === false || props.signedIn === null)
    props.history.push("/signin")
  else {
    props.history.push("/feed")
  }
  return ( <Loading /> )
}

export default withRouter(Redirect)