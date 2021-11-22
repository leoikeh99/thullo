import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../actions/authActions";

const PrivateRoutes = ({
  component: Component,
  getUser,
  auth: { loader2, token, user },
  ...rest
}) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        !token && !loader2 ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { getUser })(PrivateRoutes);
