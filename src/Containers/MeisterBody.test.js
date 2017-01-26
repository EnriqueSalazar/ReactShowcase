/**
 * Created by enriq on 17/11/16.
 */

import React from "react";
import MeisterBody from "../Containers/MeisterBody";
import renderer from "react-test-renderer";
import trafficMeister from "../service";
import ReactDOM from "react-dom";

test("Render MeisterBody test", () => {
  const component = renderer.create(
    <MeisterBody trafficMeister={trafficMeister} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MeisterBody trafficMeister={trafficMeister} />, div);
});
