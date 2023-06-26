import React from "react";
import PhotoEntry from "./PhotoEntry";
import entries from "./data/photo-entries.json";

class AlbumMaker extends React.Component {
  render() {
    console.log(entries);
    return (
      <>
        <div className="flex-container">
          {entries.itemlist.map((photo) => {
            return (
              <PhotoEntry
                key={photo.src}
                src={photo.src}
                description={photo.description}
                caption={photo.caption}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default AlbumMaker;
