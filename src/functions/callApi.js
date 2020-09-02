import axios from 'axios';

let eln_token = localStorage.getItem('eln_token');
    var header = (eln_token!==null &&  eln_token!=="undefined" )?eln_token:``;

   //axiosService.js 
    let headers ={"Authorization": 'Bearer ' + header} 
  

export default function callApi(url, method = 'GET', body){
    return axios({
        method: method,
        headers: headers,
        url: url,
        data: body
    }).catch(err => {
       
    });
};