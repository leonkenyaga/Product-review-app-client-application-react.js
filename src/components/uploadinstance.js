import { useState } from "react";
import { uploaded } from './uploadimage';
function Uploadinstance () {
    const [imgUrl, setImgUrl] = useState(null);
    var img;

return (
    <div className="App">
      <form onSubmit={uploaded} className='form'>
        <input type='file' />
        <button type='submit'>Upload</button>
      </form>
      {
        imgUrl &&
        <img src={imgUrl} alt='uploaded file' height={200} />
      }
    </div>
  );
}