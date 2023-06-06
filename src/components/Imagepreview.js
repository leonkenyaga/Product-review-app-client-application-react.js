import { useEffect, useState } from 'react';


function Imagepreview(props) {
    
    const [images, setImages] = useState([]);
  
    
  
    useEffect(() => {
      const images = [], fileReaders = [];
      let isCancel = false;
      if (props.ImageFiles.length) {
        props.ImageFiles.forEach((file) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              images.push(result)
            }
            if (images.length === props.ImageFiles.length && !isCancel) {
              setImages(images);
            }
          }
          fileReader.readAsDataURL(file);
        })
      };
      return () => {
        isCancel = true;
        fileReaders.forEach(fileReader => {
          if (fileReader.readyState === 1) {
            fileReader.abort()
          }
        })
      }
    }, [props.ImageFiles]);
    return (
      <div className="App">
{
          images.length > 0 ?
            <div>
              {
                images.map((image, idx) => {
                  return <p key={idx}> <img src={image} height={200} alt="" /> </p>
                })
              }
            </div> : null
        }
  </div>
    );
}
export default Imagepreview;