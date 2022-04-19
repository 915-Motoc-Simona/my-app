import React, { useState } from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import { Button } from 'reactstrap';

function FourthPage(props) {
  return(
    <div>
      <Navigation className="navigation4"/>
      <h2>Fourth Page --> Decrease counter</h2> 
      <Button 
        color="success" 
        onClick={() => {props.handler()}}>
        {props.counter}
      </Button>   
    </div>
  );
}

export default FourthPage;