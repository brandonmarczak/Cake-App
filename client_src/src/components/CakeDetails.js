import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CakeDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getMeetup();
  }

  getMeetup(){
    let cakeId = this.props.match.params.id;
     axios.get(`http://nodejsallday-mindtricksxcii.c9users.io:8080/api/cakes/${cakeId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let cakeId = this.state.details.id;
    axios.delete(`http://nodejsallday-mindtricksxcii.c9users.io:8080/api/cakes/${cakeId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
  }

   
render(){
    return (
     <div>
       <br />
       <h1>{this.state.details.name}</h1>
       <ul className="collection">
        <li className="collection-item">Comment: {this.state.details.comment}</li>
        <li className="collection-item">Image: {this.state.details.imageurl}</li>
          <li className="collection-item">Yum Factor: {this.state.details.yumfactor}</li>
        </ul>
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
        <Link className="btn" to={`/cakes/edit/${this.state.details.id}`}> Edit</Link>
         <Link className="btn pink" to="/">Back</Link>
      </div>
    );
  }
}

export default CakeDetails;

