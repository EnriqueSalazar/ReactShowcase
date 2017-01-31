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
            brandId: ""
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
    filterBrands = type => {
        debugger
        const data = this.props.meister.data;
        this.props.actions.filterBrands(data, type);
    };
    filterBrandColors = selectedBrandId => {
        const data = this.props.meister.data;
        this.props.actions.filterBrandColors(data, selectedBrandId);
    };

    selectType = e => {
        const type = e.target.value;
        this.setState({type});
        this.filterBrands(type)
    };
    selectBrand = e => {
        const brand = e.target.options[e.target.selectedIndex].text;
        const brandId = e.target.value;
        this.setState({brand, brandId});
        this.filterBrandColors(+brandId);
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
            this.setState({type: '', brand: '', brandId: '', color: ''});
        }
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
                            brand={this.state.brandId}
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
        debugger
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
