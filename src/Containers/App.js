import React, { Component } from 'react';
import MeisterBody from './MeisterBody';
import TopBar from '../Components/TopBar';
import trafficMeister from './service';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar />
                <MeisterBody
                    trafficMeister={trafficMeister}
                />
            </div>
        );
    }
}

export default App;
