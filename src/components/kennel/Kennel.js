import React, { Component } from "react"
import NavBar from "../nav/NavBar"
import ApplicationViews from "../ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    // newState = {}
    // search = (searchTerm) => {

    // }

    // handleSearch = (e) => {
    //     if (e.key === 'Enter') {
    //         this.search(e.target.value)
    //     }
    // }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel