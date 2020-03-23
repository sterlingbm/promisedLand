import React, { useState, useEffect } from "react";
import UserInfo from "./jsonResponseRepo/UserInfo";

async function gettingUserInfo() {
  //alert('in gettinguserinfo');
  await waiter();
  return UserInfo;
}

function waiter() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function loginRequest(props) {
  //alert("in loginRequest");
  //alert(JSON.stringify(props));

  if (props.requestType === "login") {
    await gettingUserInfo();
    const docRef = UserInfo;
    //alert('In loginRequest: ' + docRef);
    return docRef;
  }
}

export default loginRequest;
