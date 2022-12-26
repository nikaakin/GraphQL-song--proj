import React from "react";

const LyricList = ({ lyrics }) => {
  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <span>
          <i className="material-icons">thumb_up</i>
          {likes}
        </span>
      </li>
    ));
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
