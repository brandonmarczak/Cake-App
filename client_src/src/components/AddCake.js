import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class AddCake extends Component {
    addCake(newCake) {
        axios.request({
            method:'post',
            url: 'http://nodejsallday-mindtricksxcii.c9users.io:8080/api/cakes',
            data: newCake
        }).then(response => {
           this.props.history.push('/'); 
        });
        console.log(newCake);
    }
    
    onSubmit(e){
        const newCake = {
            name: this.refs.name.value,
            comment: this.refs.comment.value,
            imageurl: this.refs.imageurl.value,
            yumfactor: this.refs.yumfactor.value
        };
        this.addCake(newCake);
        console.log(this.refs.name.value);
        e.preventDefault();
    }
 
    render() {
        return (
            
    <div>
      <br />
          <h1>Add Cake</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
               <input type="text" name="name" ref="name" />
             <label htmlFor="name">Name</label>
            </div>
            
               <div className="input-field">
               <input type="text" name="comment" ref="comment" />
               <label htmlFor="comment">Comment</label>
               </div>
            
               <div className="input-field">
               <input type="text" name="imageurl" ref="imageurl" />
             <label htmlFor="imageurl">Image</label>
            </div>
            
               <div className="input-field">
               <input type="text" name="yumfactor" ref="yumfactor" />
             <label htmlFor="yumfactor">Yum factor</label>
            </div>
            
             <Link className="btn pink" to="/">Back</Link>
            <input type="submit" value="save" className="btn right" />
           </form>
         </div>
        );
    }
}

export default AddCake;