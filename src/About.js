import React from 'react'
import './App.css';
import { withLocalize, Translate } from "react-localize-redux";

function About () {
        return (
            <div>
                 <h1>
                    <Translate id="about.title" />
                </h1>
               <h6>
                    <Translate id="about.text" />
                </h6>
            </div>
        )
    }

export default withLocalize (About);
