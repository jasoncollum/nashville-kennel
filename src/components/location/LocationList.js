import React, { Component } from 'react';

class LocationList extends Component {
    render() {
        return (
            <div className="locations">
                <h3>Locations:</h3>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h4>{location.name}</h4>
                            <p>{location.address}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default LocationList