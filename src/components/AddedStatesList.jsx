import StatesListItem from "./StatesListItem";

const AddedStatesList = ({ statesAdded }) => {
  if (statesAdded == null) return null;

  return (
    <div className="card ps-5 pe-5 pt-3 pb-3 align-items-cente ">
      <h3>States Added</h3>
      <div className="d-flex flex-row flex-wrap gap-3">
        {statesAdded.map((state, index) => (
          <StatesListItem key={index} stateName={state} entryId={index} />
        ))}
      </div>
    </div>
  );
};

export default AddedStatesList;
