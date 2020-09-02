import * as Type from './../../constants/ActionType';
var initialState = {};

const detailCourse = (state = initialState, action) => {
    
    switch (action.type) {
        case Type.DETAILCOURSE :
            state = action.data;
            return state;
            
        default: return state;
    }
};

export default detailCourse;