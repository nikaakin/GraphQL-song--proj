import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import fetchSong from "../queries/fetchSong";
import Loading from "./Loading";
import Error from "./Error";
import { LyricCreate } from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(fetchSong, {
    variables: { id },
  });

  const onDataFetched = () => {
    if (!data) return null;
    return (
      <React.Fragment>
        <h3>{data.song.title}</h3>
        <LyricList lyrics={data.song.lyrics} />
        <LyricCreate id={id} />
      </React.Fragment>
    );
  };

  return (
    <div>
      <Link to="/">Home</Link>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {onDataFetched()}
    </div>
  );
};

export default SongDetail;
