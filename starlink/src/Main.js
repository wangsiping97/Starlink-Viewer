import React, {Component} from 'react';
import SatelliteSetting from './SatelliteSetting';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="left">
                    <SatelliteSetting />
                </div>
                <div className="right">
                    right
                </div>
            </div>
        );
    }
}

export default Main;