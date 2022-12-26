import { useMutation } from "@apollo/client";
import React from "react";
import likeLyricQuery from "../queries/likeLyric";

const LyricList = ({ lyrics }) => {
  const [likeLyric, { data, loading, error }] = useMutation(likeLyricQuery);

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i onClick={() => onLikeLyric(id, likes)} className="material-icons">
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  };

  const onLikeLyric = (id, likes) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        // __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
