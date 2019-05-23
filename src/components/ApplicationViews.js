import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
// Animal
import AnimalManager from '../modules/AnimalManager'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
// Location
import LocationManager from '../modules/LocationManager'
import LocationList from './location/LocationList'
// Employee
import EmployeeManager from '../modules/EmployeeManager'
import EmployeeList from './employee/EmployeeList'
// Owner
import OwnerManager from '../modules/OwnerManager'
import OwnerList from './owner/OwnerList'
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
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    }

    addAnimal = animal => {
        AnimalManager.post(animal)
            .then(() => AnimalManager.getAll())
            .then(animals => this.setState({ animals: animals }))
            .then(() => this.props.history.push("/animals"));
    };

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
                    return <LocationList
                        locations={this.state.locations} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList
                        animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal}
                        {...props} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "", breed: "Dog not found" }
                    }
                    return <AnimalDetail
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                        owners={this.state.owners} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm
                        {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />

                <Route path="/employees" render={(props) => {
                    return <EmployeeList
                        employees={this.state.employees}
                        deleteEmployee={this.deleteEmployee} />
                }} />

                <Route path="/owners" render={(props) => {
                    return <OwnerList
                        owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)