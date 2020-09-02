import * as Type from './../../constants/ActionType';
import callApi from './../../functions/callApi';


  {/*  Hiển thị chi tiet khóa học  */}


 export const  getDetailCourse = (id) => {

    return  (dispatch) => {
        
        return callApi(`http://localhost:8080/api/home/courses/detail/${id}`,'GET',null).then(res => {
            dispatch(getDetail(res.data));
        }).catch(err => {
       
     });
    }

 }
 
 export const getDetail = (data) => {
     return {
         type : Type.DETAILCOURSE,
         data
     }
 }


  {/*  hiển thị chương mục kháo học */}


  export const  getOutLineCourse = (id) => {

    return  (dispatch) => {
        
        return callApi(`http://localhost:8080/api/decuong/khoahoc/${id}`,'GET',null).then(res => {
            
            dispatch(getoutlineDetail(res.data));
        }).catch(err => {
       
     });
    }

 }
 
 export const getoutlineDetail = (data) => {
     return {
         type : Type.OUTLINECOURSE,
         data
     }
 }

   {/*  hiển thị danh sách học liệu cho  kháo học */}


   export const  getHocLieuCourse = (id) => {

    return  (dispatch) => {
        
        return callApi(`http://localhost:8080/api/outline/out/${id}`,'GET',null).then(res => {
            
            dispatch(gethlDetail(res.data));
        }).catch(err => {
       
     });
    }

 }
 
 export const gethlDetail = (data) => {
     return {
         type : Type.HOCLIEUCOURSE,
         data
     }
 }


    {/*  hiển thị danh sách trả lời bình luận */}


    export const  getListRecomment = (id) => {

        return  (dispatch) => {
            
            return callApi(`http://localhost:8080/api/recomment/${id}`,'GET',null).then(res => {
                
                dispatch(getRecomment(res.data));
            }).catch(err => {
           
         });
        }
    
     }
     
     export const getRecomment = (data) => {
         return {
             type : Type.SHOWRECOMMENT,
             data
         }
     }
    
