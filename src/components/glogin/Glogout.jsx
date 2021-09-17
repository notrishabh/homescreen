import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_GLOGIN_CLIENTID;

const Glogout = (props) => {
  const onSuccess = () => {
    props.setShowLogin(true);
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        buttonText="Logout"
      />
    </div>
  );
};

export default Glogout;
