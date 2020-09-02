import * as Type from './../constants/ActionType';
import callApi from './../functions/callApi';

export const  getListNew = () => {
   return  (dispatch) => {
   
       return callApi('http://localhost:8080/api/news/all','GET',null).then(res => {
       
           dispatch(actGetAllNew(res.data));
       }).catch(err => {
      
    });
   }
}

export const actGetAllNew = (news) => {
    return {
        type : Type.ALL_PRODUCTS,
        news
    }
}

//  lấy danh sach danh muc tin tức

export const  getListCategories = () => {
    return  (dispatch) => {
    
        return callApi('http://localhost:8080/api/news/categories/list','GET',null).then(res => {
  
            dispatch(actGetAllCate(res.data));
        }).catch(err => {
       
     });
    }
 }
 
 export const actGetAllCate = (cate) => {
     return {
         type : Type.ALL_CATE,
         cate
     }
 }

 // lấy danh sach tin tức thuộc 1 danh mục

 export const  getListNewBycategory = (id) => {
    return  (dispatch) => {
    
        return callApi(`http://localhost:8080/api/new/Category/${id}`,'GET',null).then(res => {
  
            dispatch(actGetAllnewbyCate(res.data));
        }).catch(err => {
       
     });
    }
 }
 
 export const actGetAllnewbyCate = (cate) => {
     return {
         type : Type.NEWBYCATE,
         cate
     }
 }

 
 // lấy tin tức theo id

 export const  getNEW = (id) => {
    return  (dispatch) => {
    
        return callApi(`http://localhost:8080/api/news/${id}`,'GET',null).then(res => {
  
            dispatch(actGetNewByid(res.data));
        }).catch(err => {
       
     });
    }
 }
 
 export const actGetNewByid = (kq) => {
     return {
         type : Type.GETNEW,
         kq
     }
 }