const initialState = {
    counter: 0
};


export default function counter1(state = initialState, action){
    console.log('STATE 1 >>>>>> ',state)
    switch (action.type) {
        case 'onADD' :
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'onSUB':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'addNUMBER' : {
            return {
                ...state,
                counter: state.counter + Number(action.payload.number)
            }
        }
        default: return state;
    }
}