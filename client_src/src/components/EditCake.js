import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
  
class EditCake extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            comment: '',
            imageurl: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentWillMount(){
        this.getCakesDetails();
    }
    
     getCakesDetails(){
         let cakeId = this.props.match.params.id;
        axios.get(`http://nodejsallday-mindtricksxcii.c9users.io:8080/api/cakes/${cakeId}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                comment: response.data.comment,
                imageurl: response.data.imageurl
                
            }, () => {
                console.log(this.state)
            });
       });
    }
    
    editCake(newCake){
            axios.request({
            method:'put',
            url: `http://nodejsallday-mindtricksxcii.c9users.io:8080/api/cakes/${this.state.id}`,
            data: newCake
        }).then(response => {
           this.props.history.push('/'); 
        }); 
    }
    
        onSubmit(e){
        const newCake = {
            name: this.refs.name.value,
            comment: this.refs.comment.value,
            imageurl: this.refs.imageurl.value
        };
        this.editCake(newCake);
        console.log(this.refs.name.value);
        e.preventDefault();
    }
    
    
   handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
 
    render() {
        return (
    <div>
      <br />
          <h1>Add Cake</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
               <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange}/>
             <label htmlFor="name">Name</label>
            </div>
            
               <div className="input-field">
               <input type="text" name="comment" ref="comment" value={this.state.comment} onChange={this.handleInputChange}/>
               <label htmlFor="comment">Comment</label>
               </div>
            
               <div className="input-field">
               <input type="text" name="imageurl" ref="imageurl" value={this.state.imageurl} onChange={this.handleInputChange}/>
             <label htmlFor="imageurl">Image</label>
            </div>
            
              <div className="input-field">
               <input type="text" name="yumfactor" ref="yumfactor" value={this.state.yumfactor} onChange={this.handleInputChange}/>
             <label htmlFor="yumfactor">Yum Factor</label>
            </div>
            
             <Link className="btn pink" to="/">Back</Link>
            <input type="submit" value="save" className="btn right" />
           </form>
         </div>
        );
    }
}

export default EditCake;