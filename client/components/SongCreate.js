import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import fetchSongs from "../queries/fetchSongs";

const SongCreate = () => {
  const [title, setTitle] = useState("");
  const [mutateFunction, { loading, error }] = useMutation(query);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateFunction({
      variables: { title },
      refetchQueries: [{ query: fetchSongs }],
      onQueryUpdated: navigate("/"),
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <Link to="/">Home</Link>
      <h3>Create a new Song</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="song-title">Song title:</label>
        <input
          id="song-title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const query = gql`
  mutation ($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default SongCreate;
