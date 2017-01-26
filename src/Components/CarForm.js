/**
 * Created by enriq on 17/11/16.
 */
import React from "react";
import FormItem from "../Components/FormItem";
import { Grid, Col, Row, Well, Button, Glyphicon } from "react-bootstrap";

const CarForm = props => {
  let {
    filterBrands,
    filterBrandColors,
    selectedColor,
    vehicleTypes,
    vehicleBrands,
    vehicleBrandColors,
    addSelected
  } = props;
  return (
    <div>
      <Well>
        <Grid fluid>
          <Row>
            <Col md={3}>
              <FormItem
                callback={filterBrands}
                label="Type"
                list={vehicleTypes}
              />
            </Col>
            <Col md={3}>
              <FormItem
                callback={filterBrandColors}
                label="Brands"
                list={vehicleBrands}
              />
            </Col>
            <Col md={3}>
              <FormItem
                callback={selectedColor}
                label="Colors"
                list={vehicleBrandColors}
              />
            </Col>
            <Col md={3}>
              <br />
              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={() => addSelected()}
                block
              >
                <Glyphicon glyph="ok" />{" Select"}
              </Button>
            </Col>
          </Row>
        </Grid>
      </Well>
    </div>
  );
};

export default CarForm;
