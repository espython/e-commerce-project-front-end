import React from 'react';

function ChooseDivision({ handler }) {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Product Devision</label>
      <div className="input-group mb-3">
        <select
          name="division"
          onChange={handler}
          className="custom-select custom-select-lg"
          id="inputGroupSelect02"
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="input-group-append">
          <label
            className="input-group-text custom-select-lg"
            htmlFor="inputGroupSelect02"
          >
            Options
          </label>
        </div>
      </div>
    </div>
  );
}

export default ChooseDivision;
