import * as Type from './../constants/ActionType';
var initialState = [];

const cates = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.ALL_CATE :
            state = action.cate;
            return state;
        case Type.ALL_CATE_COURSE : 
            state = action.catecourses;
            return state ;
        default: return state;
    }
};

export default cates;