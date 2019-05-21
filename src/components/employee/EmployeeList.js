import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h3>Employees:</h3>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            <p>{employee.name}</p>
                            <button onClick={this.props.deleteEmployee}>Delete {employee.name.split(' ')[0]}</button>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList