import React, { Component } from "react";
import ThemeContext from "./theme-context";

class ThemeSelect extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => {
          return (
            <label class="fds-field fds-field-select-label has-icon">
              <span class="fds-field-label">Theme</span>
              <select
                name="select"
                class="fds-field-select"
                onChange={changeTheme}
                value={theme}
              >
                <option value="dark">Dark</option>
                <option value="green">Green</option>
              </select>
            </label>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeSelect;
