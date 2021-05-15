import React from "react";

const AddMonument = () => {
  return (
    <div
      className="mb-4"
      style={{
        textAlign: "center",
        marginLeft: "25%",
        marginRight: "25%",
      }}
    >
      <form action="">
        <div className="form-row">
          <div className="col my-4">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input
              className="form-control my-4"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select className="custom-select mb-4 mr-sm-2 form-control">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "200px" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMonument;
