import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        const animals = this.props.animals;
        // const owners = this.props.owners;

        return (
            <section className="animals">
                <h3>Animals:</h3>
                {
                    animals.map(animal =>
                        <div key={animal.id}>
                            <h3>{animal.name}</h3>
                            <p>{this.props.owners.find(owner => owner.id === animal.ownerId
                            ).name}</p>
                        </div>

                    )
                }
            </section>
        )
    }
}

export default AnimalList