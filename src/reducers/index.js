import { combineReducers } from 'redux';
import news from './new';
import cates from './newCategories';
import categories from './categories';
import thenew from './thenew';
import allCourses from './../reducers/reducerCourse/allCourses';
import detailCourse from './../reducers/reducerCourse/detailCourse';
import outline from './../reducers/reducerCourse/outline';
import courseWare from './../reducers/reducerCourse/courseWare';
import listRecomment  from './../reducers/reducerCourse/reComments';
const appReducers = combineReducers({
    news,
    cates,
    categories,
    thenew,
    allCourses,
    detailCourse,
    outline,
    courseWare,
    listRecomment
});

export default appReducers;