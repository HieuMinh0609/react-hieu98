import React, {Component} from 'react';

class FormComment extends Component {
  render(){
      return (
        <div id="icon" className="input_reply_comment form-group" >
        {/* hiển thị form trả lời */} <div>
          {/* hiển thị form trả lời */}<div className="form-group">
            <input  className=" form-control retxtNewComment" rows={2} />
            <button  type="button" className="sendAns btn btn-warning"><i className="fa fa-paper-plane" /> gửi</button>
          </div>
        </div>
      </div>
       );
  }
}


export default FormComment;
