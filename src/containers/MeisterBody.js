/**
 * Created by enriq on 17/11/16.
 */
import React, {Component, PropTypes} from "react";
import CarForm from "../components/CarForm";
import ResultsTable from "../components/ResultsTable";
import {Grid, Col, Row, Alert, Button} from "react-bootstrap";
import trafficMeister from '../service';


class MeisterBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleTypes: [],
            vehicleBrands: [],
            vehicleBrandColors: [],
            data: null,
            type: "",
            brand: "",
            color: "",
            selected: [],
            err: null
        };
    }

    componentDidMount() {
        this.fetchMeister();
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.meister.data
        if (data) {
            const vehicleTypes = this.filterTypes(data);
            this.setState({vehicleTypes})
        } else {
            this.props.fetchService();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const shouldUpdate = !!nextProps.meister.data;
        return shouldUpdate;
    }

    fetchMeister = () => {
        trafficMeister.fetchData((error, data) => {
            this.props.fetchService({error, data});
        });
    };

    filterTypes = data => {
        let vehicleTypes = [];
        data.map(item => {
            let type = vehicleTypes.find(type => {
                return item.type === type.option;
            });
            if (typeof type === "undefined") {
                vehicleTypes.push({value: item.type, option: item.type});
            }
        });
        return vehicleTypes;
    };

    filterBrands = e => {
        let type = e.target.value;
        let vehicleBrands = [];
        this.state.data.map(item => {
            if (item.type === type) {
                vehicleBrands.push({value: item.id, option: item.brand});
            }
        });
        this.setState({vehicleBrands, type});
    };

    filterBrandColors = e => {
        let brand = e.target.options[e.target.selectedIndex].text;
        let selectedBrandId = parseInt(e.target.value, 10);
        let vehicleBrandColors = [];
        let selectedBrand = this.state.data.find(item => {
            return item.id === selectedBrandId;
        });
        selectedBrand.colors.map(color => {
            vehicleBrandColors.push({value: color, option: color});
        });
        this.setState({vehicleBrandColors, brand});
    };

    selectedColor = e => {
        let color = e.target.value;
        this.setState({color});
    };

    addSelected = () => {
        let selected = this.state.selected;
        let type = this.state.type;
        let brand = this.state.brand;
        let color = this.state.color;
        if (type && brand && color) {
            selected.push({type, brand, color});
            this.setState({selected});
        }
    };
    RenderData = props => {
        return (
            <Grid>
                <Row>
                    <Col>
                        <CarForm
                            filterBrands={this.filterBrands}
                            vehicleTypes={this.state.vehicleTypes}
                            filterBrandColors={this.filterBrandColors}
                            vehicleBrands={this.state.vehicleBrands}
                            selectedColor={this.selectedColor}
                            vehicleBrandColors={this.state.vehicleBrandColors}
                            addSelected={this.addSelected}
                        />
                    </Col>
                </Row>
                <Row><ResultsTable selected={this.state.selected}/></Row>
            </Grid>
        );
    };
    RenderError = () => {
        return (
            <Alert bsStyle="danger">
                <h2>{this.state.err}</h2>
                <p>
                    <Button bsStyle="danger" onClick={() => this.fetchMeister()}>
                        Reload
                    </Button>
                </p>
            </Alert>
        );
    };

    render() {
        let RenderData = this.RenderData;
        let RenderError = this.RenderError;
        return <div>{this.state.err ? <RenderError /> : <RenderData />}</div>;
    }
}

MeisterBody.propTypes = {
    fetchService: PropTypes.func.isRequired,
    meister: PropTypes.object.isRequired
}

export default MeisterBody;
