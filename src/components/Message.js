import React from "react";
import avatar from '../media/images/avatar.png';
import '../CSS/message.css';


function Message() {

    return (
<>


<div class="page-content page-container" id="page-content" >
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card card-bordered">
                    <div class="card-header">
                        <h4 class="card-title"><strong>الرسايل </strong></h4> <a class="btn btn-xs btn-secondary" href="#" data-abc="true">مركز النهضة الطبي </a>
                    </div>
                    <div class="ps-container ps-theme-default ps-active-y" id="chat-content" style="overflow-y: scroll !important; height:400px !important;">
                        <div class="media media-chat"> <img class="avatar" src={avatar} alt="..." />
                            <div class="media-body">
                                <p>السلام عليكم </p>
                               
                                <p>اخبار العﻻج ايه</p>
                                <p class="meta"><time datetime="2018">23:58</time></p>
                            </div>
                        </div>
                        <div class="media media-meta-day">اليوم</div>
                        <div class="media media-chat media-chat-reverse">
                            <div class="media-body">
                                <p>الحمدلله بخير يا دكتور و اشعر بتحسن</p>
                             
                                <p class="meta"><time datetime="2018">00:06</time></p>
                            </div>
                        </div>
                       
                        
                        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                            <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                        </div>
                        <div class="ps-scrollbar-y-rail" style="top: 0px; height: 0px; right: 2px;">
                            <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 2px;"></div>
                        </div>
                    </div>
                    <div class="publisher bt-1 border-light"> <img class="avatar avatar-xs" src={avatar} alt="..."/> <input class="publisher-input" type="text" placeholder="اكتب رسالتك"/> <span class="publisher-btn file-group"> <i class="fa fa-paperclip file-browser"></i> <input type="file"/> </span> <a class="publisher-btn" href="#" data-abc="true"><i class="fa fa-smile"></i></a> <a class="publisher-btn text-info" href="#" data-abc="true"><i class="fa fa-paper-plane"></i></a> </div>
                </div>
            </div>
        </div>
    </div>
</div>







</>



    );




}

export default Message;

