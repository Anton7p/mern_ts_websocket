import React from 'react';
import {GoogleLogin, GoogleLoginResponse} from 'react-google-login-lite';
import {FacebookLoginAuthResponse} from 'react-facebook-login-lite';
import {googleLogin} from "../../redux/actions/authAction";
import {useDispatch} from "react-redux";



function SocialLogin() {
    const dispatch = useDispatch()

    const onSuccess = (googleUser: GoogleLoginResponse) => {
        const id_token = googleUser.getAuthResponse().id_token

        dispatch(googleLogin(id_token))
    }
    // const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    //     const { accessToken, userID } = response.authResponse
    //     console.log(accessToken,userID)
    // }

    return (
        <div className="my-2">
            <GoogleLogin
                client_id='577484812987-6qa9q657i1jtsijsfth15lecq6nd12d6.apps.googleusercontent.com'
                cookiepolicy='single_host_origin'
                onSuccess={onSuccess}

            />
        </div>
    );
}

export default SocialLogin;