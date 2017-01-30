/**
 * Created by enriq on 17/11/16.
 */
import React from "react";
import CarForm from ".//CarForm";
import renderer from "react-test-renderer";

test("Render CarForm test", () => {
  let testCallback = () => {};
  const component = renderer.create(
    (
      <CarForm
        filterBrands={testCallback}
        vehicleTypes={
          [ { value: 1, option: "uno" }, { value: 2, option: "dos" } ]
        }
        filterBrandColors={testCallback}
        vehicleBrands={
          [ { value: 3, option: "tres" }, { value: 4, option: "cuatro" } ]
        }
        selectedColor={testCallback}
        vehicleBrandColors={
          [ { value: 5, option: "cinco" }, { value: 6, option: "seis" } ]
        }
        addSelected={testCallback}
      />
    )
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
