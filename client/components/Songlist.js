import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../queries/deleteSong";
import "../style/style.css";

export const Songlist = () => {
  const { data, loading, error } = useQuery(fetchSongs);
  const [songDelete, {}] = useMutation(deleteSong);

  const renderTitles = () => {
    return data.titles.map(
      ({ title, id }) =>
        title && (
          <li key={id} className="collection-item">
            <Link to={`songs/${id}`}>{title}</Link>
            <i
              className="material-icons delete-btn"
              onClick={(e) => onDeleteSong(id)}
            >
              delete
            </i>
          </li>
        )
    );
  };

  const onDeleteSong = (id) => {
    songDelete({
      variables: { id },
      refetchQueries: [{ query: fetchSongs }],
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <ul className="collection">{renderTitles()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};
