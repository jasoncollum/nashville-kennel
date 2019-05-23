import React, { Component } from 'react'
import AnimalItem from './AnimalItem'
import './Animal.css'

class AnimalList extends Component {

    render() {
        return (
            <section className="animals">
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>
                {
                    this.props.animals.map(animal => {
                        return <AnimalItem key={animal.id} animal={animal} deleteAnimal={this.props.deleteAnimal} />
                    }
                    )
                }
            </section>
        )
    }
}

export default AnimalList