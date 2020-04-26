import React, { Component } from 'react'
import { connect } from 'react-redux'

class EmployeeList extends Component {
    render() {
        const { employees } = this.props
        console.log(employees)

        return (
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Title</th>
                </tr>
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
            </table>
        )
  }
}


const mapStateToProps = ({ employees }) => {
    //console.log('HEREEEEEEEEEEEEEEEEEE', ownProps)
    //employees = employees.rows
    return {
        employees
    }
} 


export default connect(mapStateToProps)(EmployeeList)