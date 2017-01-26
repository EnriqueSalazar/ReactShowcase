/**
 * Created by enriq on 17/11/16.
 */
import React from "react";

import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
const FormItem = props => {
  const { callback, label, list } = props;
  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>{label}</ControlLabel>
      <FormControl componentClass="select" onChange={callback}>
        <option value="select">{""}</option>
        {list.map(item => {
            return (
              <option value={item.value} key={item.value}>
                {item.option}
              </option>
            );
          })}
      </FormControl>
    </FormGroup>
  );
};

export default FormItem;
