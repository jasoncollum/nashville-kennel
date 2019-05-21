import React, { Component } from 'react'

class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h3>Owners:</h3>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default OwnerList