import React, { Component } from 'react'
import { connect } from 'react-redux'

class EmployeeList extends Component {
    render() {
        const { employees } = this.props

        return (
            <div id='wrapper'>
                <table>
                    <thead id='header'>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.rows && employees.rows.map(employee => 
                                <tr>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.title}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
  }
}


const mapStateToProps = ({ employees }) => {
    return {
        employees
    }
} 


export default connect(mapStateToProps)(EmployeeList)




