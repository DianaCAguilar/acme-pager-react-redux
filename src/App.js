import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { getEmployees } from './store'
import EmployeeList from './EmployeeList'
import Nav from './Nav'
import EmployeeForm from './EmployeeForm'

class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <h1>ACME PAGER</h1>
                <div>
                    <HashRouter> 
                        <Route component ={ EmployeeForm }/>
                        <Route path='/:page?' render={({match}) => this.props.load(match.params.page)}/>
                        <Route path='/' component={ EmployeeList } />
                        <Route component ={ Nav }/>
                    </HashRouter>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (page) => {
            dispatch(getEmployees(page))
        }
    }
}

export default connect(null, mapDispatchToProps)(App)