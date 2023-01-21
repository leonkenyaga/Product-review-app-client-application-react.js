import React, { Component } from 'react';
import axios from 'axios'
class Postlists  extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            error:""
        }
    }

 componentDidMount() {
   axios.get( "http://localhost:4000/api/getAllUsers")   
   .then(response => {
    console.log(response)
    this.setState({posts: response.data})
    })
   .catch(error => {
    console.log(error )
    this.setState({error:"error message"})
   });
}    
    render() { 
       // const { posts } = this.state.posts
        const { posts,error } = this.state
        return (
            <div>
             List of user  
             {
                posts.length ?
                posts.map(post => <div key={post._id}>{post.name}</div>) : 
                null                                                                                                                                                                                                                                                                         
             }
             {
                
                error.length ? <div>{error}</div> : 
                null                                                      
             }
            </div> 
        );
    }
}
 
export default Postlists;