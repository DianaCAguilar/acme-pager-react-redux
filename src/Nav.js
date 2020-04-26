import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = ({ employees, ownProps }) => {
    const count = employees.count && Math.ceil(Number(employees.count) / 50)
    const totalPages = Array.from({length: count}, (v, k) => k+1); 
    const nextPage = Number(ownProps.location.pathname.slice(1)) + 1
    const previousPage = Number(ownProps.history.location.pathname.slice(1)) - 1
    
    console.log(previousPage)

    return (
        <div id='navWrapper'>
            <div id='navInner'>
                <nav>
                    <NavLink activeClassName='selected' to={`/${previousPage}`}>Prev</NavLink>
                    {totalPages.map(page => <NavLink activeClassName='selected' to={`/${page - 1}`} >{page}</NavLink>)}
                    <NavLink activeClassName='selected' to={`/${nextPage}`}>Next</NavLink>
                </nav>
            </div>
        </div>
    )
}
const mapStateToProps = ({ employees }, ownProps) => {
    return {
        employees,
        ownProps
    }
}

export default connect(mapStateToProps)(Nav)