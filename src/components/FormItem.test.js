/**
 * Created by enriq on 17/11/16.
 */
import React from "react";
import FormItem from ".//FormItem";
import renderer from "react-test-renderer";

test("Render FormItem test", () => {
  let testCallback = () => {};
  const component = renderer.create(
    (
      <FormItem
        callback={testCallback}
        label="Brands"
        list={[ { value: 1, option: "uno" }, { value: 2, option: "dos" } ]}
      />
    )
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
