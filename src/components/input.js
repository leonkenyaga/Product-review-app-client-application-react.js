import { useState, React } from "react";
import Chooseimagebutton from "./chooseimagebutton";
import Imagepreview from "./Imagepreview";
import Inputfield from "./Inputfield";
import styles from "./css/input.module.css";

const imageTypeRegex = /(image|video)/gm;

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
      <div className={styles.input1}>
        <input
          className={styles.productinput}
          type="text"
          placeholder="What's new?"
        />
        <p>
          🤑{" "}
          <input
            className={styles.priceinput}
            type="text"
            placeholder="price"
          />
        </p>
        <Imagepreview ImageFiles={imageFiles} />
      </div>

      <div className={styles.input2}>
        <Chooseimagebutton changeHandler={changeHandler} />
        <Inputfield Placeholder="Description" />
      </div>
    </div>
  );
};
export default Input;
