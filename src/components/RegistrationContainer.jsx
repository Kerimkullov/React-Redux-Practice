import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Translate } from "react-localize-redux";

function RegistrationContainer () {
    const {email, password, repeatPassword} = useSelector(state => state.registration)
    const dispatch = useDispatch();

    function setEmailText(e) {
        dispatch({
            type: "REGISTRATION_CHANGE_EMAIL_TEXT",
            payload:e.target.value
        });
    }

    function setPasswordText(e) {
        dispatch({
            type: "REGISTRATION_CHANGE_PASSWORD_TEXT",
            payload: e.target.value
        });
    }

    function setRepeatPasswordText(e) {
        dispatch({
            type: "REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT",
            payload: e.target.value
        });
    }
    
    const handleSubmite = (e) => {
        e.preventDefault()
        if(email.length && repeatPassword === password && password.length){
        document.getElementById('auth').style.display = 'block'
        document.getElementById('registration').style.display = 'none'
        } 
        else{ alert('false')}
        console.log(email)
    }
        return (
            <div id="registration" style={{display: 'block'}}>
                <h3>
                    <Translate id="regis.title">Sign In</Translate>
                </h3>
                <form onSubmit={handleSubmite}>
                    <div>
                        <input type="text"
                            // value={email}
                            onChange={setEmailText}
                             />
                    </div>
                    <div>
                        <input type="text"
                            // value={password}
                            onChange={setPasswordText}
                             />
                    </div>
                    <div>
                        <input type="text"
                            // value={repeatPassword}
                            onChange={setRepeatPasswordText}
                             />
                    </div>
                    <div>
                        <button>
                            <Translate id="regis.title">Sign In</Translate>
                        </button>
                    </div>
                </form>
                {/* <div>{email}</div> */}
            </div>
        )
    }

export default RegistrationContainer;
