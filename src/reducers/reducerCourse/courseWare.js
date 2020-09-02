import * as Type from './../../constants/ActionType';
var initialState = [];

const courseWare = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.HOCLIEUCOURSE :
            state = action.data;
            return state;
            
        default: return state;
    }
};

export default courseWare;