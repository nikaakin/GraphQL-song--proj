import React from "react";

export default (error) => {
  console.log(error);
  const err = error.error;
  return (
    <div
      style={{
        display: "flex",
        color: "red",
        fontWeight: 600,
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        fontSize: "24px",
      }}
    >
      <br />
      <h1>{err.statusCode}</h1>
      <p>{err.message}</p>
      <br />
    </div>
  );
};
