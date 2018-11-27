import React, { Component } from 'react';
import LoadingSpinner from './components/loadingSpinner';
import HomePage from './components/homepage';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            isLoading:false
        }
    }

    componentDidMount(){
        setTimeout(()=>this.setState({isLoading:false}),3000);
    }
  render() {
    return (this.state.isLoading ? <LoadingSpinner/> : <HomePage/>);
  }
}

export default App;
