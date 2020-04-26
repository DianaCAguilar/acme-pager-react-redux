import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEmployees } from './store'
import EmployeeList from './EmployeeList'
import { HashRouter, Route } from 'react-router-dom'

class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <HashRouter> 
                    <Route ><h1>ACME PAGER</h1></Route>
                    <Route path='/:page?' render={({match}) => this.props.load(match.params.page)}/>
                    <Route path='/' component={ EmployeeList } />
                </HashRouter>
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