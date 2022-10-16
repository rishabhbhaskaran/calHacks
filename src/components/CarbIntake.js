import React from "react";
import styles from "./IntakeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageUploading from 'react-images-uploading';
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const CarbIntake = (props) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className={styles.item}>
      <h2>Claim Credits</h2>
      <br></br>
      <FontAwesomeIcon icon={faCoins} />
      <p></p>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <p>
        Upload images of bus-passes/public-transport tickets/ your regular meal to get carbon credits.
      </p>
    </div>
  );
};

export default CarbIntake;
