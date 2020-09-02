import * as Type from './../constants/ActionType';
var initialState = {};

const thenew = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.GETNEW :
            state = action.kq;
            return state;
            
        default: return state;
    }
};

export default thenew;