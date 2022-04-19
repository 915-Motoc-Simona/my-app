import React, { useState } from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";

function SecondPage() {
  return(
    <div>
      <Navigation className="navigation2"/>
      <h2>Second Page</h2> 
    </div>
  );
}

export default SecondPage;