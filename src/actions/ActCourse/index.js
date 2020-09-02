import * as Type from './../../constants/ActionType';
import callApi from './../../functions/callApi';


  {/*  lấy tất cả khóa học  */}


 export const  getAllCourse = () => {

    return  (dispatch) => {
        
        return callApi('http://localhost:8080/api/home/course/new','POST',null).then(res => {
    
            dispatch(getAllCourseNew(res.data));
        }).catch(err => {
       
     });
    }

 }
 
 export const getAllCourseNew = (courses) => {
     return {
         type : Type.GETALLCOURSE,
         courses
     }
 }



   {/* tìm kiếm kháo học */}


 export const  getAllCourseBySearch = (index,key) => {

    return  (dispatch) => {
        
        return callApi(`http://localhost:8080/api/home/mycourses/${index}/${key}`,'GET',null).then(res => {
            dispatch(getAllCourseNewBySearch(res.data[0]));
        }).catch(err => {
       
     });
    }

 }
 
 export const getAllCourseNewBySearch = (courses) => {
     return {
         type : Type.SEARCH_COURSE,
         courses
     }
 }



  {/* lấy danh muc khóa hoc */}
 


 export const  getAllCategoriCourse= () => {

    return  (dispatch) => {
        
        return callApi('http://localhost:8080/api/get/all/categoryCourse','GET',null).then(res => {
            dispatch(getAllCateCourse(res.data));
        }).catch(err => {
     });
    }

 }
 
 export const getAllCateCourse = (catecourses) => {
     return {
         type : Type.ALL_CATE_COURSE,
         catecourses
     }
 }



   {/* lấy  khóa hoc thuộc danh muc khóa học*/}
 
   export const  getAllCourseByCategoriCourse= (id) => {

    return  (dispatch) => {
        
        return callApi(`http://localhost:8080/api/get/allCourseByIdCate/${id}`,'GET',null).then(res => {

            dispatch(getAllCourseCateCourse(res.data));
        }).catch(err => {
     });
    }

 }
 
 export const getAllCourseCateCourse = (courses) => {
     return {
         type : Type.ALLCOURSECATE,
         courses
     }
 }