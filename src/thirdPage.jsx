import React, { useState } from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import { Button } from 'reactstrap';

function ThirdPage(props) {
  return(
    <div>
      <Navigation className="navigation3"/>
      <h2>Third Page --> Increase counter</h2> 
       <Button 
        color="success" 
        onClick={() => {props.handler()}}>
        {props.counter}
        </Button>   
    </div>
  );
}

export default ThirdPage;