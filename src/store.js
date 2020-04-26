import axios from 'axios'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunks from 'redux-thunk'
import { createLogger } from 'redux-logger'

//constants
const SET_EMPLOYEES = 'SET_EMPLOYEES'

//action creators
const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees })

//thunks
const getEmployees = (page = 0) => {
    return async(dispatch) => {
        const employees = (await axios.get(`/api/employees/${page}`)).data
        return dispatch(setEmployees(employees))
    }
}

//reducers
const employeeReducer = (state = [], action) => {
    if (action.type === SET_EMPLOYEES) {
        return action.employees
    }
    return state
}

const reducer = combineReducers({
    employees: employeeReducer
})

//create store
const store = createStore(reducer, applyMiddleware(
    thunks,
    createLogger({collapsed: true})
))

export default store

export {
    getEmployees
}