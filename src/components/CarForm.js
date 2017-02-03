/**
 * Created by enriq on 17/11/16.
 */
import React from "react";
import FormItem from "./FormItem";
import {Grid, Col, Row, Well, Button, Glyphicon} from "react-bootstrap";

const CarForm = props => {
    let {
        selectType,
        selectBrand,
        selectColor,
        vehicleTypes,
        vehicleBrands,
        vehicleBrandColors,
        addSelected,
        type,
        brand,
        color,
    } = props;
    const buttonDisabled = !(type && brand && color) || type==='' || brand ==='' || color==='';
    return (
        <div><Well> <Grid fluid>
            <Row>
                <Col md={3}>
                    <FormItem
                        callback={selectType}
                        label="Type"
                        list={vehicleTypes}
                        value={type}
                    />
                </Col>
                <Col md={3}>
                    <FormItem
                        callback={selectBrand}
                        label="Brands"
                        list={vehicleBrands}
                        value={brand}
                    />
                </Col>
                <Col md={3}>
                    <FormItem
                        callback={selectColor}
                        label="Colors"
                        list={vehicleBrandColors}
                        value={color}
                    />
                </Col>
                <Col md={3}>
                    <br />
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={() => addSelected()}
                        block
                        disabled={buttonDisabled}
                    >
                        <Glyphicon glyph="ok"/>{" Select"}
                    </Button>
                </Col>
            </Row>
        </Grid> </Well></div>
    );
};

export default CarForm;
