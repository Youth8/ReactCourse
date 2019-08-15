import { connect } from "react-redux";
import Page from "./index";

export default connect(
  state => ({ authFromState: state.Auth })
)(Page);
