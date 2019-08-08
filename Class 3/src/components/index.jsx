import React, { PureComponent } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import Layout from "epc-ui-layout";
import { BrowserRouter as Router } from "react-router-dom";
import AppContext from "./context";
import roomsJson from "../../data/rooms.json";

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appContext: {
        data: {
          auth: false,
          rooms: [...roomsJson.rooms]
        },
        changeContext: this.onChange.bind(this)
      }
    };
  }

  onChange(data) {
    this.setState({
      appContext: {
        ...this.state.appContext,
        data: {
          ...this.state.appContext.data,
          ...data
        }
      }
    });
  }

  render() {
    const { appContext } = this.state;
    return (
      <AppContext.Provider value={appContext}>
        <Router>
          <Layout.Column align="center" className="header">
            <Header />
          </Layout.Column>
          <Layout.Column align="center">
            <Layout.Column
              width={{ all: "80%", mobile: "90%" }}
              top="10px"
              height="900px"
            >
              <Body />
            </Layout.Column>
          </Layout.Column>
          <Layout.Column align="center" padding="10px 0" className="footer">
            <Footer />
          </Layout.Column>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default index;
