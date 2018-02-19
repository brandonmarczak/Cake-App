import React, { Component } from 'react';
import axios from 'axios';
import CakeItem from './CakeItem';

class Cakes extends Component {
    constructor() {
        super();
        this.state = {
            cakes: []
        };
    }
    
    componentWillMount(){
       this.getCakes();
    }
    
    getCakes(){
        axios.get('http://nodejsallday-mindtricksxcii.c9users.io:8080/api/cakes')
        .then(response => {
            console.log(response.data);
            this.setState({cakes: response.data}, () => {
                console.log(this.state);
            });
        });
    }
    
    render(){
        const cakeItems = this.state.cakes.map((cake, i) => {
            return(
           <CakeItem key={cake.id} item={cake} />
           );
        });
        return (
             <div>
        <h1>Cakes</h1>
        <ul className="collection">
          {cakeItems}
        </ul>
      </div>
        );
    }
}

export default Cakes;