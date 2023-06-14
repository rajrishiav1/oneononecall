import React from 'react'
import { useParams } from 'react-router-dom'
import {appId, serversecret} from '../Room/helper'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomid} = useParams();
   // console.log("roomid",roomid );

   const myMeeting = async(element)=>{
    const appID = appId;
    const serverSecret= serversecret;
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), "Rishav Raj");

     // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

      // start the call
      zp.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:"Copy Link",
                url:`http://localhost:3000/room/${roomid}`
            }
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.GroupCall
        }     ,

      })
   }
  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default Room
