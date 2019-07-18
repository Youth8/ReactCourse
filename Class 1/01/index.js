// set type with 'module' to support ES6 Module
//<script type="module" src='index.js'></script>
import HelloWorld from './HelloWorld.js';

ReactDOM.render(
    React.createElement(HelloWorld, {text:'Hello world!'}),
    document.getElementById('content')
);