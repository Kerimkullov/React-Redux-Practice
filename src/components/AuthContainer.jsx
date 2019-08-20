import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Translate } from "react-localize-redux";



function AuthContainer () {
    const { repeatPassword } = useSelector(state => state.registration)
    const { email, password } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    function setEmailText(e) {
        dispatch({
            type: "AUTH_CHANGE_EMAIL_TEXT",
            payload: e.target.value
        });
    }

    function setPasswordText(e) {
        dispatch({
            type: "AUTH_CHANGE_PASSWORD_TEXT",
            payload: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === repeatPassword) {
            document.getElementById('auth').style.display = 'none'
            document.getElementById('login').style.display = 'block'
        }
        else { alert('false') }
        console.log(email)
    }

        return (
            <div>
                <div id="auth" style={{ display: 'none' }}>
                <h3>
                    <Translate id="auth.title">Sign In</Translate>
                </h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text"
                            value={email}
                            onChange={setEmailText}
                             />
                    </div>
                    <div>
                        <input type="text"
                            value={password}
                            onChange={setPasswordText}
                             />
                    </div>
                    <div>
                        <button>
                            <Translate id="auth.button">Sign In</Translate>
                        </button>
                    </div>
                </form>
                </div>
                <div id="login" style={{display:'none'}}>Congratulations!</div>
            </div>
        )
}


export default AuthContainer;
