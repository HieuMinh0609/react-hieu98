import * as Type from './../constants/ActionType';
var initialState = {};

const news = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.ALL_PRODUCTS :
            state = action.news;
            return state;
            
        default: return state;
    }
};

export default news;