const InfoBox = ({ data }) => {
  return (
    <div className="text-center m-3">
      {data && data?.city?.name === "Globe"
        ? "No Search Results"
        : "Add State Capital: " + data?.city?.name}
    </div>
  );
};

export default InfoBox;
