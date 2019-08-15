#### DEMO: Single Page Application - Room Management

**NPM local settings**

Because the demo code use EXPEDIA internal packages like [epc-ui-core-react](https://github.expedia.biz/LodgingPlatform/epc-ui-core-react), [epc-ui-validation](https://github.expedia.biz/LodgingPlatform/epc-ued/tree/master/packages/epc-ui-validation), [epc-ui-validation-ferris](https://github.expedia.biz/LodgingPlatform/epc-ued/tree/master/packages/epc-ui-validation-ferris) [epc-ui-layout](https://github.expedia.biz/LodgingPlatform/epc-ued/tree/master/packages/epc-ui-layout) etc. So we need set the npm register to internal repository and grant your account right to access it. Detail guide please refer to [Artifactory NPM Configuration](https://confluence.expedia.biz/display/AK/Artifactory+NPM+Configuration).


**Redux**

Redux is a Container for State Management.

React-Redux is a React Component for adapting Redux in React.
```shell
npm i redux react-redux
```

**Redux Core Concepts**

**Components in React-Redux**

**High Order Component**

A higher-order component (HOC) is an advanced technique in React for reusing component logic. 

```js
// Wrapper method accept a component as input, and output a new component which called HOC.
const Wrapper = Inner => {
  class AuthWrapper extends BaseComponent {
    // constructor(props, context) {
    //   super(props, context);
    // }

    render() {
      if (!this.context.data.auth) {
        return <Redirect to="/login" />;
      }

      return <Inner {...this.props} />;
    }
  }

  return AuthWrapper;
};

const HighOrderComponent = Wrapper(InnerComponent);

export default HighOrderComponent;
```
