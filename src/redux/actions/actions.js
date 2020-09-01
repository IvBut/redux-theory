import {ADD, ADD_NUMBER, SUB} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: {
            number: number
        }
    }
}

export  function addAsync(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNumber(number))
        },3000)
    }
}