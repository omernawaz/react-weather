import { useDispatch } from "react-redux";
import { removeChart } from "../features/chartsSlice";

const StatesListItem = ({ stateName }) => {
  const dispatch = useDispatch();

  return (
    <div className="border border-5 border-primary rounded-4 p-2 align-items-center">
      {stateName}{" "}
      <button
        className="btn-close "
        onClick={() => dispatch(removeChart(stateName))}
      ></button>
    </div>
  );
};

export default StatesListItem;
