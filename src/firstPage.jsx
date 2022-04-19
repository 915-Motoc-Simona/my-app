import React, { useState } from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";

function FirstPage() {
    return(
      <div>
        <Navigation className="navigation1"/>
        <h2>First Page</h2> 
      </div>
    );
}

export default FirstPage;