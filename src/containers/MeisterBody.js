/**
 * Created by enriq on 17/11/16.
 */
import React, {Component, PropTypes} from "react";
import CarForm from "../components/CarForm";
import ResultsTable from "../components/ResultsTable";
import {Grid, Col, Row, Alert, Button} from "react-bootstrap";
import _ from 'lodash';

class MeisterBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            brand: "",
            color: "",
        };
    }

    componentDidMount() {
        this.fetchMeister();
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.meister.data;
        if (!data) {
            this.fetchMeister();
        } else if (!_.isEqual(data, this.props.meister.data)) {
            this.filterTypes(data);
        }
    }

    fetchMeister = () => {
        this.props.actions.fetchMeister();
    };

    filterTypes = data => {
        this.props.actions.filterTypes(data);
    };
    filterBrands = (type) => {
        const data = this.props.meister.data;
        this.props.actions.filterBrands(data, type);
    };
    filterBrandColors = (type, brand) => {
        const data = this.props.meister.data;
        this.props.actions.filterBrandColors(data, type, brand);
    };

    selectType = e => {
        const type = e.target.value;
        this.setState({type}, this.filterBrands(type));
        this.resetField('brand');
        this.resetField('color');
    };
    selectBrand = e => {
        const brand = e.target.value;
        const type = this.state.type;
        this.setState({brand}, this.filterBrandColors(type, brand));
        this.resetField('color');
    };
    selectColor = e => {
        let color = e.target.value;
        this.setState({color});
    };

    addSelected = () => {
        const type = this.state.type;
        const brand = this.state.brand;
        const color = this.state.color;
        if (type && brand && color) {
            this.props.actions.addSelected({type, brand, color});
            this.resetField('type');
            this.resetField('brand');
            this.resetField('color');
        }
    };

    resetField = (field) => {
        this.setState({[field]: ''});
    };

    RenderData = () => {
        const meister = this.props.meister;
        return (
            <Grid>
                <Row>
                    <Col>
                        <CarForm
                            selectType={this.selectType}
                            vehicleTypes={meister.vehicleTypes}
                            selectBrand={this.selectBrand}
                            vehicleBrands={meister.vehicleBrands}
                            selectColor={this.selectColor}
                            vehicleBrandColors={meister.vehicleBrandColors}
                            addSelected={this.addSelected}
                            type={this.state.type}
                            brand={this.state.brand}
                            color={this.state.color}
                        />
                    </Col>
                </Row>
                <Row><ResultsTable selected={meister.selected}/></Row>
            </Grid>
        );
    };
    RenderError = () => {
        const err = this.props.meister.error;
        return (
            <Alert bsStyle="danger">
                <h2>{err}</h2>
                <p>
                    <Button bsStyle="danger" onClick={() => this.fetchMeister()}>
                        Reload
                    </Button>
                </p>
            </Alert>
        );
    };

    render() {
        const err = this.props.meister.error;
        let RenderData = this.RenderData;
        let RenderError = this.RenderError;
        return <div>{err ? <RenderError /> : <RenderData />}</div>;
    }
}

MeisterBody.propTypes = {
    actions: PropTypes.object.isRequired,
    meister: PropTypes.object.isRequired
};

export default MeisterBody;
