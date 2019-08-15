import React from "react";

const AppContext = React.createContext({
  data: {
    auth: false
  },
  changeContext: action => {}
});

export default AppContext;
