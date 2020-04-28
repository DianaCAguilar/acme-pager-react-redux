import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEmployee } from './store'

class EmployeeForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            title: '',
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    async onSubmit(ev) {
        ev.preventDefault()
        try {
            await this.props.create({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                title: this.state.title
            })
        } catch (error) {
            this.setState({ error: error.response.data.message})
        }
    }
    render() {
        const { onSubmit } = this
        const { firstName, lastName, email, title } = this.state

        return (
            <div id='form'>
                <p>Add a New Employee</p>
                <form onSubmit={ onSubmit }>
                    First Name <input value={ firstName } onChange={ ev => this.setState({ firstName: ev.target.value })} />
                    Last Name <input value={ lastName } onChange={ ev => this.setState({ lastName: ev.target.value })} />
                    Email <input value={ email } onChange={ ev => this.setState({ email: ev.target.value })}/>
                    Title <input value={ title } onChange={ ev => this.setState({ title: ev.target.value })}/>
                    <button>Add Employee</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        create: (employee) => {
            return dispatch(createEmployee(employee))
        }
    }
}

const Connected = connect(null, mapDispatchToProps)(EmployeeForm)
export default Connected