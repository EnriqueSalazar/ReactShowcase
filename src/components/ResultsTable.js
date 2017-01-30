/**
 * Created by enriq on 17/11/16.
 */
import React from "react";

import { Table } from "react-bootstrap";
const ResultsTable = props => {
  const { selected } = props;
  return (
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr>
          <th width="33%">Type</th>
          <th width="33%">Brand</th>
          <th width="33%">Color</th>
        </tr>
      </thead>
      <tbody>
        {selected.map(item => {
            return (
              <tr
                key={
                  Math
                    .floor((1 + Math.random()) * 65536)
                    .toString(16)
                    .substring(1)
                }
              >
                <td>{item.type}</td>
                <td>{item.brand}</td>
                <td>{item.color}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default ResultsTable;