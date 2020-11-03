import React, {Component} from 'react';
import axios from 'axios';
import SatelliteSetting from './SatelliteSetting';
import SatelliteList from './SatelliteList';
import {NEARBY_SATELLITE, SAT_API_KEY, STARLINK_CATEGORY} from './constants';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            satInfo: null,
            settings: null,
            isLoadingList: false
        }
    }

    showNearbySatellite = (setting) => {
        this.setState ({
            settings: setting
        })
        this.fetchSatellite(setting);
    }

    fetchSatellite = (setting) => {
        const {observerLat, observerLong, observerElevation, satAlt} = setting;
        const url = `${NEARBY_SATELLITE}/${observerLat}/${observerLong}/${observerElevation}/${satAlt}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        this.setState ({
            isLoadingList: true
        });
        axios.get(url)
             .then(response => {
                 console.log(response.data)
                 this.setState ({
                     satInfo: response.data,
                     isLoadingList: false
                 })
             })
             .catch(error => {
                 console.log('err in fetch satellite -> ', error);
             })
    }

    render() {
        const {satInfo} = this.state;
        return (
            <div className="main">
                <div className="left">
                    <SatelliteSetting onShow={this.showNearbySatellite}/>
                    <SatelliteList satInfo={satInfo} isLoad={this.state.isLoadingList}/>
                </div>
                <div className="right">
                    right
                </div>
            </div>
        );
    }
}

export default Main;