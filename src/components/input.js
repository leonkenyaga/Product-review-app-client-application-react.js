import { useState, React } from "react";
import Chooseimagebutton from "./chooseimagebutton";
import Imagepreview from "./Imagepreview";
import Inputfield from "./Inputfield";
import styles from "./css/input.module.css"

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

const Input = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const changeHandler = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  return (
    <div className={styles.input}>
      <Imagepreview ImageFiles={imageFiles} />
      <Chooseimagebutton changeHandler={changeHandler} /> 
      <Inputfield />
      </div>
  );
};
export default Input;
