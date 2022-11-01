import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetGameByIdQuery } from "../../redux/services/gamesCore";
import Load from "../Load";

const UpcomingCard = ({ id }) => {
  const { data, isFetching, error } = useGetGameByIdQuery(id);

  const navigate = useNavigate();

  const goTo = (idpass) => {
    navigate(`/game/${idpass}`);
  };

  if (isFetching) {
    return <Load />;
  }

  const style = {
    background: `top/cover url(${data?.background_image})`,
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundBlendMode: "color",
    height: "12rem",
    display: "flex",
    width: "100%",
    margin: "0.5rem 0",
    borderRadius: "5px",
    overflow: "hidden",
    cursor: "pointer",
  };

  return (
    <div style={style} onClick={() => goTo(id)}>
      <div className="text-white flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-semibold text-center py-2 px-4 w-full flex flex-wrap justify-center">
          {data?.name}
        </h1>
        <h2>
          release:{" "}
          {data?.released?.replace("-", " / ").replace("-", " / ") || "tba"}
        </h2>
      </div>
    </div>
  );
};

export default UpcomingCard;
