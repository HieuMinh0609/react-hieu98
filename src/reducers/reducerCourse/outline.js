import * as Type from './../../constants/ActionType';
var initialState = [];

const outline = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.OUTLINECOURSE :
            state = action.data;
            return state;
            
        default: return state;
    }
};

export default outline;