import * as Type from './../constants/ActionType';
var initialState = [];

const categories = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.NEWBYCATE :
            state = action.cate;
            return state;
            
        default: return state;
    }
};

export default categories;