import { Button, Input, message, Typography } from 'antd';
import { Api, Mappers } from 'modules/auth';
import React, { Component } from 'react';

export default class Login extends Component {
  handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();

    const email = document.querySelector<HTMLInputElement>('#email')?.value!;
    const password = document.querySelector<HTMLInputElement>('#password')?.value!;
    
    try { 
      const loginRes = await Api.Login({ email, password });
      const token = loginRes.data.data;
      
      const meRes = await Api.Me({ token });
      const user = Mappers.User(meRes.data);
        
      message.success(`Successfully Logged in. Hi ${user.name} 🎉`);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className=" container mx-auto flex h-full flex-col items-center  gap-2">
        <form onSubmit={this.handleSubmit} className="flex w-[800px] flex-col gap-2">
          <Typography className="text-center text-3xl">Login Form</Typography>
          <Input id="email" type="email" placeholder="email" size="large" />
          <Input.Password id="password" placeholder="password" size="large" />
          <Button type="primary" htmlType="submit" size="large">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
