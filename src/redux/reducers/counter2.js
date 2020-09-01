const initialState = {
    counter: 200
};


export default function counter2(state = initialState, action){
    console.log('STATE 2 >>>>>> ',state);
    switch (action.type) {
        case 'onADD2' :
            return {
                ...state,
                counter: state.counter + action.payload.number
            };
        default: return state;
    }
}