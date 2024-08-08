import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAPILink, getStateCoordinates } from "./utils";
import { fetchData } from "./features/dataSlice";
import { addChart } from "./features/chartsSlice";

import Chart from "./components/Chart";
import AddStateForm from "./components/AddStateForm";
import InfoBox from "./components/InfoBox";
import AddedStatesList from "./components/AddedStatesList";

const App = () => {
  const forecast = useSelector((state) => state.data);
  const chartState = useSelector((state) => state.chart);
  const dispatch = useDispatch();

  const [queryString, setQueryString] = useState("");
  const [queryLink, setQueryLink] = useState("");

  useEffect(() => {
    const requiredCoordinates = getStateCoordinates(queryString);
    const query = getAPILink(
      requiredCoordinates.lat,
      requiredCoordinates.lon,
      "metric"
    );

    setQueryLink(query);
  }, [queryString]);

  useEffect(() => {
    dispatch(fetchData(queryLink));
  }, [queryLink]);

  function handleAddState(e) {
    e.preventDefault();
    if (!forecast.isLoading && forecast.data) {
      dispatch(addChart(forecast.data));
    }
    setQueryString("");
  }

  return (
    <div className="container">
      <h1 className="text-center pt-5 pb-3">Weather Graphs</h1>
      <AddStateForm
        onAddState={handleAddState}
        onQueryChange={setQueryString}
        queryString={queryString}
      />
      <InfoBox data={forecast.data} />

      {chartState.entries.length > 0 && (
        <AddedStatesList statesAdded={chartState.entries} />
      )}

      {chartState.entries.length > 0 && <Chart charts={chartState} />}
    </div>
  );
};

export default App;
