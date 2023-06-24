import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import styles from "./css/chooseimagebutton.module.css";

const Chooseimagebutton = ({ changeHandler }) => {
  return (
    <div className={styles.chooseimagebutton}>
      <input
        accept="image/*,video/*"
        id="icon-button-file"
        onChange={changeHandler}
        type="file"
        style={{ display: "none" }}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          aria-label="upload picture"
          color="default"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
};

export default Chooseimagebutton;
