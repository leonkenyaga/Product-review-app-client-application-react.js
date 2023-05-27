import React,{Component} from "react";
import {database} from "./Firebaseinnit"
import {ref, set, get, update, remove, child } from "firebase/database"



class Write extends Component{

    constructor(props){
        super(props)
        this.state = {
            db: '',
            product:'',
            price:'',
            description:''
        }
        this.interface=this.interface.bind(this);
    }
    componentDidMount(){
        this.setState(
            {
                db:database
            }
        );
    }
     
    render(){
        return(
            <div>
            <label> Enter product name </label>
            <input type="text" id="productbox" value={this.state.product} 
            onChange={e =>{this.setState({product: e.target.value});}}/>
            <br/>
            <label> Enter product price </label>
            <input type="text" id="pricebox" value={this.state.price} 
            onChange={e =>{this.setState({price: e.target.value});}} />
            <br/>
            <label> Enter product description</label>
            <input type="text" id="descriptionbox" value={this.state.description} 
            onChange={e =>{this.setState({description: e.target.value});}}/>
            <br/>
            <div>
        {
          this.state.ImageUrl &&
          <img src={this.state.ImageUrl} alt='uploaded file' height={500} />
        } 
            
            </div>

            <button id="addBtn" onClick={this.interface}>Add Data</button>
            <button id="updateBtn" onClick={this.interface}>Update Data</button>
            <button id="deleteBtn" onClick={this.interface}>Delete Data</button>
            <button id="selectBtn" onClick={this.interface}>Select Data</button>

            </div>

        )
    }

    interface(event){
        const id = event.target.id;

        if(id==='addBtn'){
            this.writeUserData();
        }
        else if(id==='updateBtn'){
            this.updateData();
        }
        else if(id==='deleteBtn'){
            this.deleteData();
        }
        else if(id==='selectBtn'){
            this.gettingData();
        }

    }

    


  //  getAllInputs(){
    //    return{
      //      product: this.state.product,
        //    price:this.state.price,
          //  description: this.state.description
        //}
    //}

    writeUserData() {
        const db = database;
        set(ref(db, 'users/' + this.state.product), {
          price:this.state.price,
          description: this.state.description
        })
         .then(()=>{alert("data was added successfully")})
         .catch((error)=>{alert("there was an error, details:"+ error)})
      }


   // insertData(){
    //    const db=this.state.db;
    //    const data= this.getAllInputs();
     //   set(ref(db, data.product),
     //   {
     //    price:data.price,
     //    description:data.description
     //   }
     //   )
      //  .then(()=>{alert("data was added successfully")})
      //  .catch((error)=>{alert("there was an error, details:"+ error)})
   // }
    updateData(){
        const db=database;
        //const data= this.getAllInputs();
        update(ref(db, `users/${this.state.product}`),
        {

         price:this.state.price,
         description:this.state.description,
        }
        )
        .then(()=>{alert("data was updated successfully")})
        .catch((error)=>{alert("there was an error, details:"+ error)})  
    }
    deleteData(){
        const db=database;
        remove(ref(db, `users/${this.state.product}`))
        .then(()=>{alert("data was deleted successfully")})
        .catch((error)=>{alert("there was an error, details:"+ error)})  
    }

   gettingData(){
    const dbRef = ref(database);
    get(child(dbRef, `users/${this.state.product}`)).then((snapshot) => {
    if (snapshot.exists()) {
        alert("snapshot exists")
        this.setState(
            {
                product: this.state.product,
                price: snapshot.val().price,
                description: snapshot.val().description,
                ImageUrl:snapshot.val().ImageUrl
            }
        )
    } else {
    alert("No data available");
    }
    }).catch((error) => {
    alert("there was an error");
    });
   }



}
export default Write;