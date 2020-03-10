import React from "react";

function ShowCard(props) {
  console.log("props", props);

  const { show } = props;

  console.log("show", show);

  return (
    <div className="show-card">
      <img src={show.image.medium} alt={show.name} />
      <h2>{show.name}</h2>
    </div>
  );
}

export default ShowCard;
