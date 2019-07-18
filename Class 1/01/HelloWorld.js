export default class HelloWorld extends React.Component{
    render(){
        const {text}=this.props;
        return React.createElement('span',[], text);
    }
};