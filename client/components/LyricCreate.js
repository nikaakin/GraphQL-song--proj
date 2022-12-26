import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import addLyric from "../queries/addLyric";
import Loading from "./Loading";
import Error from "./Error";
// import fetchSong from "../queries/fetchSong";

export const LyricCreate = ({ id }) => {
  const [content, setContent] = useState("");
  const [setLyric, { data, loading, error }] = useMutation(addLyric);

  const submitLyric = (e) => {
    e.preventDefault();
    setLyric({
      variables: { id, content },
      // refetchQueries: [{ query: fetchSong, variables: { id } }],
    });
    setContent("");
  };

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <form onSubmit={submitLyric}>
        <label>Add Lyric</label>
        <input onChange={(e) => setContent(e.target.value)} value={content} />
      </form>
    </div>
  );
};
