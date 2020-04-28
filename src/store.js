import axios from 'axios'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunks from 'redux-thunk'
import { createLogger } from 'redux-logger'

//constants
const SET_EMPLOYEES = 'SET_EMPLOYEES'
const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

//action creators
const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees })
const addEmployee = (employee) => ({ type: ADD_EMPLOYEE, employee })

//thunks
const getEmployees = (page = 0) => {
    return async(dispatch) => {
        const employees = (await axios.get(`/api/employees/${page}`)).data
        return dispatch(setEmployees(employees))
    }
}
const createEmployee = (employee) => {
    return async (dispatch) => {
        const response = await axios.post(`/api/employees`, employee)
        return dispatch(addEmployee(response.data))
    }
}


//reducers
const employeeReducer = (state = [], action) => {
    if (action.type === SET_EMPLOYEES) {
        return action.employees
    }
    if (action.type === ADD_EMPLOYEE) {
        return [action.employee, ...state]
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
    getEmployees,
    createEmployee
}