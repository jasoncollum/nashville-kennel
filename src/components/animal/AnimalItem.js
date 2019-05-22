import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import { Link } from 'react-router-dom'

export default class AnimalItem extends Component {
    state = {
        saveDisabled: false
    }

    handleClick = (e) => {
        this.setState({
            saveDisabled: true
        })
        this.props.deleteAnimal(this.props.animal.id)
    }

    render() {
        return (
            <article>
                <h3>{this.props.animal.name}</h3>
                <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
            </article>
        )
    }
}