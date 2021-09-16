import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshTokenSetup";
import api from "../../api/glogin.js";
const clientId = process.env.REACT_APP_GLOGIN_CLIENTID;

const Glogin = () => {
  const onSuccess = (res) => {
    api.login({ tokenId: res.tokenId }).then((response) => {
      console.log(response);
    });

    //initializing the setup
    refreshTokenSetup(res);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Glogin;
