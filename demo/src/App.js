import React, {Component} from 'react';
import logo from './logo.svg';
import * as consume from 'elifetchmodes6';
import './App.css';

class App extends Component{

  componentDidMount(){
    const getLog = {
      method: "get",
      url:'https://jsonplaceholder.typicode.com/posts/1',
    }
    consume.fetch(getLog).then( res => {
      console.log(res);
      this.setState({
        data: res.logger
      })
    })

    consume.onErrorMain();
  
    
  }

  render(){
    return(
      <h1>Welcome</h1>
    )
  }


}
export default App;
