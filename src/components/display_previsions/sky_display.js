import React, { Component } from 'react';
import { connect } from 'react-redux';

import MinMax from '../display_previsions/min_max';

class SkyDisplay extends Component {
    
    renderWeather(cityData) {
        const name = cityData.city.name + ' ('+cityData.city.country+')' ;
             

        return (
            <tr key={name}>
                <td>{ name }</td>
                {cityData.temperatureMinMax.map(function(object, i){
                    return <MinMax data={object} key={i} />;
                })}
            </tr>
            
        );
    }

    render() {
        if(this.props.weather.length == 0) {
            return <div>Pas de recherche</div>
        }

        return (
            <table className="table table-hover width=auto">
                <thead>
                    <tr>
                        <th className="small">City</th>
                        <th colSpan="6">Sky state</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({weather}) {
    return { weather }; // { weather } === { weather: weather };
}

export default connect(mapStateToProps)(SkyDisplay)