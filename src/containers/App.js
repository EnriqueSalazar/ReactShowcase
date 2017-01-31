import React, { PropTypes } from 'react'
import MeisterBody from './MeisterBody';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MeisterActions from '../actions'
import TopBar from '../components/TopBar'

const App =({meister, actions}) =>(
            <div className="App">
                <TopBar />
                <MeisterBody actions={actions} meister={meister}/>
            </div>

);

App.propTypes = {
    meister: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    meister: state.meister
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(MeisterActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)