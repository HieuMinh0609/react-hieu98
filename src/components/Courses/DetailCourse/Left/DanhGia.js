import React, {Component} from 'react';
import cours from './../../../../images/cours.jpg';
import callApi from './../../../../functions/callApi';
import Comments from './../Left/Comments';
import FormComment from './FormComment';
class DanhGia extends Component{
   constructor(props) {
     super(props);
     this.state={
       danhgia : {},
       stars : {},
       num : '',
       one : '',
       two : '',
       three : '',
       forr : '',
       five : '',
       idRate : '',
       comments : []
     }
   }
   
   showRate =(id,idr)=>{
     if(id==1){
      this.setState({
        one : 'width: 100%;',
        idRate : idr
      })
     }else if(id==2){
      this.setState({
        two : 'width: 100%;',
        idRate : idr
      })
     }else if(id==3){
      this.setState({
        three : 'width: 100%;',
        idRate : idr
      })
     }else if(id==4){
      this.setState({
        forr : 'width: 100%;',
        idRate : idr
      })
     }else{
      this.setState({
        five : 'width: 100%;',
        idRate : idr
      })
    }
   }

   hienthidanhgia = (id,kq,idr) =>{
    if(id==1){
      this.setState({
        one : kq,
        idRate : idr
     
      })
     }else if(id==2){
      this.setState({
        two : kq,
        idRate : idr
    
      })
     }else if(id==3){
      this.setState({
        three : kq,
        idRate : idr
    
      })
     }else if(id==4){
      this.setState({
        forr : kq,
        idRate : idr
        
      })
     }else{
      this.setState({
        five : kq,
        idRate : idr
      })
    }
   }


    danhgia =(event) =>{
      var idRate = event.target.getAttribute('id');
      var {idc} = this.props;
      callApi(`http://localhost:8080/api/check/role/user/${idc}`,'GET',null).then(res => {
       var check =  res.data ;
       if(check!==''){
         if(check[1] >0) alert("bạn đã đánh giá khóa học này !");
         else{  // /rating/star/{eID}/{m}
          callApi(`http://localhost:8080/api/rating/star/${idRate}/${idc}`,'GET',null).then(res => {
           let num = res.data[0];
           var long = res.data[1].length;
      
           if(num==1){
             this.showRate(idRate,res.data[3]) ; 

             var data = {
                starOne : this.state.one ,
                starTwo : this.state.two ,
                starThree :this .state.three ,
                starFor : this.state.forr ,
                starFive :this.state.five ,
                idRate : this.state.idRate 
             }

             callApi('http://localhost:8080/api/show/review','POST',data).then(res => {
                
             });

           }else{

            
            for (var j = 1; j < 6; j++) {
              var count = res.data[1].filter(i => i === j).length;
              var rate = count / long * 100;
              var kq =`width:`+rate+`%;`;
      
              this.hienthidanhgia(j,kq,res.data[3]);
             
               }
              //  res.data[1].splice(0, long);
               var data = {
                starOne : this.state.one ,
                starTwo : this.state.two ,
                starThree :this .state.three ,
                starFor : this.state.forr ,
                starFive :this.state.five ,
                idRate : this.state.idRate 
             }

             callApi('http://localhost:8080/api/show/review','POST',data).then(res => {
                
             });
            }
        });
         }
      }else alert("Bạn cần đăng kí khóa học để có thể đánh giá !");
      });
   
    }
    componentDidMount(){
      var {idc} = this.props;
      
       callApi(`http://localhost:8080/api/danhgias/khoahoc/${idc}`,'GET',null).then(res => {
      if(res){
        this.setState({
          danhgia : res.data,
          stars : res.data[1],
          num : res.data[3],
          one : res.data[1].star_one,
          two : res.data[1].star_two,
          three : res.data[1].star_three,
          forr : res.data[1].star_for,
          five : res.data[1].star_five,
          comments : res.data[5]
  
        })
      }
 

    });
    }
    render(){
       var {danhgia,comments,num,one,two,three,forr,five} = this.state ;

       if(Object.keys(danhgia).length>0){
        var one = one.slice(6,one.length-1) ;
        
        var two = two.slice(6,two.length-1) ;
        var three = three.slice(6,three.length-1) ;
        var four = forr.slice(6,forr.length-1) ;
        var five = five.slice(6,five.length-1);

        return (
          <div className="tab_panel tab_panel_3 active">
          <div className="tab_panel_title">Đánh giá khóa học</div>
          {/* Rating */}
          <div className="review_rating_container">
            <div className="review_rating">
        <div className="review_rating_num">{danhgia[2]}</div>
              <div className="review_rating_stars">
                <div className="rating_r rating_r_4"><i id='1' onClick={this.danhgia}/><i id='2'  onClick={this.danhgia}/><i id='3' onClick={this.danhgia}/><i id='4' onClick={this.danhgia}/><i id='5' onClick={this.danhgia}/></div>
              </div>
              <div className="review_rating_text">({num ? num : '0'} đánh giá)</div>
            </div>
            <div className="review_rating_bars">
              <ul>
                <li><span>5 Star</span><div className="review_rating_bar"><div style={{width: five }} /></div></li>
                <li><span>4 Star</span><div className="review_rating_bar"><div style={{width: four }} /></div></li>
                <li><span>3 Star</span><div className="review_rating_bar"><div style={{width: three }} /></div></li>
                <li><span>2 Star</span><div className="review_rating_bar"><div style={{width: two }} /></div></li>
                <li><span>1 Star</span><div className="review_rating_bar"><div style={{width: one }} /></div></li>
              </ul>
            </div>
          </div>
          <FormComment/>
          {/* Comments */}
            {this.checkComment(danhgia[4],comments)}
         </div>
      )
       }
       return (
         <div>
           aaaaa
         </div>
       )

    }

    checkComment = (role,comment) => {
        var result = null;
        if(role!==''){
          result = ( <Comments comments = {comment}/> );
        }else{
          result=(<div className="add_comment_container">
          <div className="add_comment_text text-center" style={{color: 'red' }}>Bạn cần đăng kí khóa học này để comment !</div>
        </div>);
        }
       return result;
    }


}

export default DanhGia ;