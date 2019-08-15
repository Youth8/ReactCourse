import { connect } from "react-redux";
import Login from "./index";
import { changeAuth } from "../../actions";

export default connect(
  state => ({ authFromState: state.Auth }),
  dispatch => ({ changeAuth: auth => dispatch(changeAuth(auth)) })
)(Login);
