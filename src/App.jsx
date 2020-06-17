
import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: ''
         }
    }
    search(){
        console.log(this.state);
    }
    render() { 
        return ( 
            
            <div className='App'>
            <div className='App-Title'>
                Music Master from App</div>
                <div>
                    <input placeholder='Search The Artist' 
                    query= {this.state.query}
                    onChange={event=> {this.setState({query: event.target.value})}}
                    onKeyPress={ event=>{
                        if (event.key==='Enter'){
                            this.search()

                        }}
                    }
                        />
                     
                    <button onClick={()=> this.search()}> Search</button>
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