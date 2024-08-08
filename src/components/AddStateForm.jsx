const AddStateForm = ({ onAddState, onQueryChange, queryString }) => {
  function handleChange(newVal) {
    onQueryChange(newVal);
  }
  return (
    <div className="card ps-5 pe-5 pt-3 pb-3 align-items-center">
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={onAddState}
      >
        <div className="col-12">
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Username
          </label>
          <div className="input-group">
            <div className="input-group-text">State: </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Enter a state"
              value={queryString}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-outline-success">
            Add +
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStateForm;
