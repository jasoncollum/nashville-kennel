import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.svg"

export default class Animal extends Component {

    render() {
        return (
            <section className="animal">
                <div key={this.props.animal.id} className="card">
                    <div className="card-body">
                        <img src={dog} className="icon--dog" alt="" />
                        <h4 className="card-title">
                            {this.props.animal.name}
                        </h4>
                        <p>Owner: {
                            (this.props.owners.length > 0) ?
                                this.props.owners.find(owner => owner.id === this.props.animal.ownerId).name :
                                ""
                        }
                        </p>

                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.dischargeAnimal(this.props.animal.id)
                                )
                            }
                        }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}