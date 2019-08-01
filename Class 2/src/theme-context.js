import React from "react";

const ThemeContext = React.createContext({
  theme: "green",
  changeTheme: () => {}
});
export default ThemeContext;
