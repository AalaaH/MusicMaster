
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
        const BASE_URL='https://jsonplaceholder.typicode.com/todos/1?';
        const FETCH_URL=`${BASE_URL} q= ${this.state.query} &type=artist&limit=1`; 
                    console.log('FETCH_URL', FETCH_URL);    
    fetch(FETCH_URL,{
        method: 'GET'
    })
    .then(response=> response.json())
   .then(json=> console.log('Json', json));
              
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