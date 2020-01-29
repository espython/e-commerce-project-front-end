import React, { useState } from 'react';

function ChooseCategoryComp({ handler }) {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Product Category</label>
      <select
        name="category"
        // value={category}
        onChange={handler}
        className="form-control px-3 form-control-lg"
        id="exampleFormControlSelect1"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default ChooseCategoryComp;
