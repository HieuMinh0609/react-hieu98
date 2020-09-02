import * as Type from './../../constants/ActionType';
var initialState = {};

const allCourses = (state = initialState, action) => {
    switch (action.type) {
      
        case Type.GETALLCOURSE :
            state = action.courses;
            return state;
        case Type.SEARCH_COURSE :
            state = action.courses;
            return state;      
        case Type.ALLCOURSECATE :
            state = action.courses;
            return state ;
        
        default: return state;
    }
};

export default allCourses;
