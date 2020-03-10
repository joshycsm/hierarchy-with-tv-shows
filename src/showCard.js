import React from "react";

function showCard(props) {
  console.log(props);

  const { show } = props;

  console.log(show);

  return (
    <div className="show-card">
      <img src="{show.image.medium}" alt="" />
      <h2>{show.name}</h2>
    </div>
  );
}
