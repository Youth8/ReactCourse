import { PureComponent } from "react";
import AppContext from "../context";

class BaseComponent extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
}

BaseComponent.contextType = AppContext;

export default BaseComponent;
