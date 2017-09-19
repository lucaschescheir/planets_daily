import React, { Component } from 'react';

class Planets extends Component {
    render(){
        let planetArray = this.props.planets;
    const planets = planetArray.map(planets => {
        return(
            <div className="planets">
                <ul>
                    <li><h1>{planets.name}</h1></li>
                    <li>Planet Temp: {planets.climate}</li>
                    <li>Diameter: { planets.diameter }</li>
                    <li>Terrain: { planets.terrain }</li>
                    <li>Population: { planets.population }</li>
                </ul>

            </div>
        )
    })

return (
<div className="planet_container">
    {planets}
</div>
)
}
}

export default Planets;
