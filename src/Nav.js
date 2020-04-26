import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = ({ employees, ownProps }) => {
    const count = employees.count && Math.ceil(Number(employees.count) / 50)
    const totalPages = Array.from({length: count}, (v, k) => k+1); 
    const currentPage = Number(ownProps.location.pathname.slice(1)) + 1

    return (
        // <nav>
        //     <NavLink>1</NavLink>
        //     <NavLink>2</NavLink>
        //     <NavLink>3</NavLink>
        // </nav>
        <nav>
            <NavLink to={`/${currentPage - 1}`}>Prev</NavLink>
            {totalPages.map(page => <NavLink to={`/${page - 1}`} >{page}</NavLink>)}
            <NavLink to={`/${currentPage + 1}`}>Next</NavLink>
        </nav>
    )
}
const mapStateToProps = ({ employees }, ownProps) => {
    // console.log('props: ', employees)
    // console.log('ownProps: ', ownProps)
    return {
        employees,
        ownProps
    }
}

export default connect(mapStateToProps)(Nav)