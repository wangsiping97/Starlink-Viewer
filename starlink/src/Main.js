import React, {Component} from 'react';
import SatelliteSetting from './SatelliteSetting';
import SatelliteList from './SatelliteList';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="left">
                    <SatelliteSetting />
                    <SatelliteList />
                </div>
                <div className="right">
                    right
                </div>
            </div>
        );
    }
}

export default Main;