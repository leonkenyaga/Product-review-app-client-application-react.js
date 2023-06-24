import React, { Component } from "react";
import { database } from "./Firebaseinnit";
import { storage } from "./Firebaseinnit";
import {
  ref as ref_storage,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import {
  ref as ref_database,
  set,
  get,
  update,
  remove,
  child,
} from "firebase/database";

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: "",
      product: "",
      price: "",
      description: "",
      ImgURL: "",
    };
    this.interface = this.interface.bind(this);
  }
  componentDidMount() {
    this.setState({
      db: database,
    });
  }

  render() {
    return (
      <div>
        <label> Enter product name </label>
        <input
          type="text"
          id="productbox"
          value={this.state.product}
          onChange={(e) => {
            this.setState({ product: e.target.value });
          }}
        />
        <br />
        <label> Enter product price </label>
        <input
          type="text"
          id="pricebox"
          value={this.state.price}
          onChange={(e) => {
            this.setState({ price: e.target.value });
          }}
        />
        <br />
        <label> Enter product description</label>
        <input
          type="text"
          id="descriptionbox"
          value={this.state.description}
          onChange={(e) => {
            this.setState({ description: e.target.value });
          }}
        />
        <br />
        <div>
          <form onSubmit={this.handleSubmit} className="form">
            <input type="file" multiple />
            <button type="submit">Upload</button>
          </form>
          <img src={this.state.ImgUrl} alt="uploaded file" height={100} />
        </div>

        <button id="addBtn" onClick={this.interface}>
          Add Data
        </button>
        <button id="updateBtn" onClick={this.interface}>
          Update Data
        </button>
        <button id="deleteBtn" onClick={this.interface}>
          Delete Data
        </button>
        <button id="selectBtn" onClick={this.interface}>
          Select Data
        </button>
      </div>
    );
  }

  interface(event) {
    const id = event.target.id;

    if (id === "addBtn") {
      this.writeUserData();
    } else if (id === "updateBtn") {
      this.updateData();
    } else if (id === "deleteBtn") {
      this.deleteData();
    } else if (id === "selectBtn") {
      this.gettingData();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref_storage(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          this.setState({ ImgURL: downloadURL });
        });
      }
    );
  };

  //  getAllInputs(){
  //    return{
  //      product: this.state.product,
  //    price:this.state.price,
  //  description: this.state.description
  //}
  //}

  writeUserData() {
    const db = database;
    set(ref_database(db, "users/" + this.state.product), {
      price: this.state.price,
      description: this.state.description,
      ImgURL: this.state.ImgURL,
    })
      .then(() => {
        alert("data was added successfully");
      })
      .catch((error) => {
        alert("there was an error, details:" + error);
      });
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
  updateData() {
    const db = database;
    //const data= this.getAllInputs();
    update(ref_database(db, `users/${this.state.product}`), {
      price: this.state.price,
      description: this.state.description,
    })
      .then(() => {
        alert("data was updated successfully");
      })
      .catch((error) => {
        alert("there was an error, details:" + error);
      });
  }
  deleteData() {
    const db = database;
    remove(ref_database(db, `users/${this.state.product}`))
      .then(() => {
        alert("data was deleted successfully");
      })
      .catch((error) => {
        alert("there was an error, details:" + error);
      });
  }

  gettingData() {
    const dbRef = ref_database(database);
    get(child(dbRef, `users/${this.state.product}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("snapshot exists");
          this.setState({
            product: this.state.product,
            price: snapshot.val().price,
            description: snapshot.val().description,
            ImageUrl: snapshot.val().ImageUrl,
          });
        } else {
          alert("No data available");
        }
      })
      .catch((error) => {
        alert("there was an error");
      });
  }
}
export default Write;
