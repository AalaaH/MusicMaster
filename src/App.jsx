
import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className='App'>
            <div className='App-Title'>
                Music Master from App</div>
                <div>
                    <input placeholder='Search The Artist'/>
                    <button> Search</button>
                </div>
                <div className='Profile'>
                <div>Artist Picture </div>
                <div> Artist Name</div>
                </div>
                <div className='Gallery'> Gallery</div>
          
            </div>
           
         );
    }
}
 
export default App ;