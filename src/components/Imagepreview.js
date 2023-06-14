import { useEffect, useState } from 'react';
import  styles from "./css/imagepreview.module.css"
import { style } from '@mui/system';


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
      <div >
{
          images.length > 0 ?
            <div>
              {
                images.map((image, idx) => {
                  return <div  className={styles.imagesection} key={idx}> <img className={styles.selectedimage}src={image}  alt="" /> </div>
                })
              }
            </div> : null
        }
  </div>
    );
}
export default Imagepreview;