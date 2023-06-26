import React from "react";
import "./master.css";

class PhotoEntry extends React.Component {
  render() {
    console.log("src = " + this.props.src);
    console.log("location = " + this.props.description);
    console.log("caption = " + this.props.caption);
    const imagePath = "../images/" + this.props.src;
    return (
      <>
        <div className="photo-entry-block">
          <a href={imagePath} target={"_blank"}>
            <img className="photo-image" src={imagePath} alt={imagePath} />{" "}
          </a>
          <h4>{this.props.caption}</h4>
          <p>{this.props.description}</p>
        </div>
      </>
    );
  }
}

export default PhotoEntry;
