import React, { Component } from "react";
import { Button, Form, Input, Typography } from "antd";
import "../App.css";

class LoginCard extends Component {
  render() {
    return (
      <div className="appBg">
        <Form className="LoginForm">
          <Typography.Title className="Typo" color="primary">
            Welcome
          </Typography.Title>
          <Form.Item label="Email" name={"myEmail"}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item label="Password" name={"myPassword"}>
            <Input placeholder="Password" />
          </Form.Item>
          <Button type="black" htmlType="submit" block>
            Login
          </Button>

          <div className="socialLogin">
            <Button type="black" htmlType="submit" block>
              {" "}
              Sign-up{" "}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default LoginCard;
