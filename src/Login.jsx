import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, Checkbox } from "antd";
import "antd/dist/reset.css";
import "./login.css";
import Register from "./Register";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    // TODO
    // make a post request to check username and password
    fetch("https::/localhost:5000/users", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
      body: {
        username: formData.username,
        password: formData.password,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.status === "Login Successfull"
          ? setLoginSuccess(true)
          : setLoginSuccess(false)
      );
  };

  const handleSignup = async () => {
    // TODO
    // navigate to Sign-up page
    navigate("/create"); // uncomment this when
  };

  return (
    <div className="login-div">
      <Form
        className="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="login"
            onClick={handleSignup}
            handleSignup={Register}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
