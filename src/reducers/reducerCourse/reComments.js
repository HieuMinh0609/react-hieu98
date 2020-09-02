import * as Type from './../../constants/ActionType';
var initialState = [];

const listRecomment = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.SHOWRECOMMENT :
            state = action.data;
            return state;
            
        default: return state;
    }
};

export default listRecomment;