import axios from 'axios';
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class GLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            email: '',
            name: '',
            provider: '',
        }
    }

    // Google Login
    responseGoogle = (res) => {
        res = res.profileObj;

        axios({
            method: 'POST',
            url: '/oauth/googleLogin',
            data:{
                res
            }
        }).then((res)=> {
            // if(res.data.msg === 'success'){
            //     // 토큰 받아오기
            //     const googleToken = res.data.token;
            // }
        })
    }

    // Google Login Fail
    responseFail = (err) => {
        console.log(err);
    }

    render() {
        return (
            <>
                <GoogleLogin
                    clientId="584673240291-hhlhk15fsp18l0f9mq2taqdq1fsoc90c.apps.googleusercontent.com"
                    buttonText="Google Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
            </>
        )
    }
}

export default GLogin;