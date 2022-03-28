import React from 'react'

import pic from './poster/randomimage.jpg'
import './govermentscheme.css'
import GovermentSchemes2 from './GovermentSchemes2'
import Govtscheme2 from './schemesHindi/Govtscheme2'
// import { Route, Link, Router } from "react-router-dom";
import { BrowserRouter as Router ,Route  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Govermentschemes = () => {

  const language = useSelector(state => state.languagereducer)
  console.log(language)
  if(language === "english"){
    return (<div className="readmore1">
         
    <Route path="/" component={GovermentSchemes2} />
 
</div>)
  }
  else if(language === "hindi" || language === "garhwali"){
  return ( <div><Govtscheme2/></div>)
  }
}

export default Govermentschemes