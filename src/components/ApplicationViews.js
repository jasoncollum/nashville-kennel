import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import LocationList from './LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './OwnerList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles", ownerId: 1 },
        { id: 2, name: "Jack", ownerId: 2 },
        { id: 3, name: "Angus", ownerId: 4 },
        { id: 4, name: "Henley", ownerId: 3 },
        { id: 5, name: "Derkins", ownerId: 2 },
        { id: 6, name: "Checkers", ownerId: 1 }
    ]

    ownersFromAPI = [
        { id: 1, name: "Jason", phone: "615-111-1111" },
        { id: 2, name: "Berk", phone: "615-123-1234" },
        { id: 3, name: "Francis", phone: "615-135-1122" },
        { id: 4, name: "Linus", phone: "615-789-9900" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews