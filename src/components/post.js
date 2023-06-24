import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [likes, setLikes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [tag, setTag] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("likes", JSON.stringify(likes));
    formData.append("tag", tag);
    reviews.forEach((item, index) => {
      formData.append(`reviews[${index}]`, item);
    });
    images.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });
    try {
      const response = await axios.post(
        "http://localhost:4000/api/uploadFile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLikesChange = (event) => {
    const { value } = event.target;
    const newLikes = value.split(",");
    setLikes(newLikes);
  };

  const handleReviewChange = (event, index) => {
    const { value } = event.target;
    const newReviews = [...reviews];
    newReviews[index] = value;
    setReviews(newReviews);
  };

  const handleAddReview = () => {
    setReviews([...reviews, ""]);
  };

  const handleRemoveReview = (index) => {
    const newReviews = [...reviews];
    newReviews.splice(index, 1);
    setReviews(newReviews);
  };

  const handleTagChange = (event) => {
    const { value } = event.target;
    setTag(value);
  };

  const handleImagesChange = (event) => {
    const { files } = event.target;
    const newImages = Array.from(files);
    setImages(newImages);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Likes:
        <input type="text" name="likes" onChange={handleLikesChange} />
      </label>
      <br />
      <label>
        Reviews:
        {reviews.map((review, index) => (
          <div key={index}>
            <input
              type="text"
              name={`reviews[${index}]`}
              placeholder="Review"
              value={review}
              onChange={(event) => handleReviewChange(event, index)}
            />
            <button type="button" onClick={() => handleRemoveReview(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddReview}>
          Add Review
        </button>
      </label>
      <br />
      <label>
        Tag:
        <input type="text" name="tag" onChange={handleTagChange} />
      </label>
      <br />
      <label>
        Images:
        <input
          type="file"
          name="images"
          multiple
          onChange={handleImagesChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

/* const [formData, setFormData] = useState({
    images: null,
    tag: '',
    reviews:"",
    likes: ""
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFormData(prevFormData => ({ ...prevFormData, file }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('images', formData.images);
    data.append('tag', formData.tag);
    data.append('reviews', formData.reviews);
    data.append('likes', formData.likes);

    axios.post('http://localhost:4000/api/uploadFile', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          images:
          <input type="file" name="images" value={formData.images} onChange={handleChange} />
        </label>
        <label>
          tag:
          <input type="text" name="tag" value={formData.tag} onChange={handleChange} />
        </label>
        <label>
          reviews:
          <input type="text" name="reviews" value={formData.reviews} onChange={handleFileUpload} />
        </label>
        <label>
          likes:
          <input type="text" name="likes" value={formData.likes} onChange={handleFileUpload} />
        </label>
        
        <button type="submit">Submit</button>
        </form>
        </div>
  );*/

export default Post;
/*class Post  extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:"",
            city:"",
            profilepic:new FormData()
        }
    }

    handleChange = e =>{
      this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit= e =>{
      e.preventDefault()
      console.log(this.state)
      axios.post("http://localhost:4000/api/uploadFile", this.state)
      .then(response => {
        console.log(response)
        })
       .catch(error => {
        console.log(error )
       });
    }

    render() { 
       const { name, city, profilepic } = this.state
       return (
        <div>
       <form>
       <div >
           <input type="text" placeholder="name" name="name" value={name} onChange={this.handleChange}/>
         </div>
         <div>
           <input type="text" placeholder="city" name="city" value={city} onChange={this.handleChange}/>
         </div> 
         <div>
           <input type="file" placeholder="Profilepic" name="profilepic" value={profilepic} onChange={this.handleChange}/>
         </div>
         <div>
         <button type="submit" onClick={this.handleSubmit}>Sign In</button>
         </div>
       </form>
       </div>
       )
        
}
}
 
export default Post;*/
