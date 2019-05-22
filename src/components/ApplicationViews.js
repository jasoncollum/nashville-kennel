import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import OwnerManager from '../modules/OwnerManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
// import SearchResults from '../search/SearchResults'


class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        searchResults: []
    }

    deleteAnimal = (id) => {
        const newState = {}
        AnimalManager.delete(id)
            .then(AnimalManager.getAll)
            .then(animals => {
                newState.animals = animals
            })
            .then(() => this.setState(newState))
    }

    deleteEmployee = (id) => {
        const newState = {}
        EmployeeManager.delete(id)
            .then(EmployeeManager.getAll)
            .then(employees => {
                newState.employees = employees
            })
            .then(() => this.setState(newState))
    }

    componentDidMount() {
        console.log('APPVIEWS componentDidMount')
        const newState = {}
        AnimalManager.getAll().then(animals => newState.animals = animals)
            .then(OwnerManager.getAll).then(owners => newState.owners = owners)
            .then(EmployeeManager.getAll).then(employees => newState.employees = employees)
            .then(LocationManager.getAll).then(locations => newState.locations = locations)
            .then(() => this.setState(newState))
    }

    render() {
        console.log('APPVIEWS render')
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews