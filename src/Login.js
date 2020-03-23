import React, { useState, useEffect } from "react";
import ActionHub from "./ActionHub";
import { Image, List } from "semantic-ui-react";

const Login = () => {
  const [loginResponse, setLoginresponse] = useState([]);

  const UserList = ({ data }) => (
    <List horizontal>
      {data.map(user => (
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          />
          <List.Content>
            <List.Header>{user.name}</List.Header>
            {user.car}
          </List.Content>
        </List.Item>
      ))}
    </List>
  );

  async function handleLogin(params) {
    //alert('in handle login');
    setLoginresponse([{ name: "Getting response" }]);
    try {
      const response = await ActionHub(params);
      //alert('response: ' + JSON.stringify(response));
      setLoginresponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <UserList data={loginResponse} />

      <button onClick={() => handleLogin({ requestType: "login" })}>
        Click To get Info
      </button>
    </div>
  );
};

export default Login;
