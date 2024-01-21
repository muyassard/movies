import { Button, Input, message } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { Api } from 'modules/auth';
import React, { Component } from 'react';

export default class Register extends Component {
  handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();

    const name = document.querySelector<HTMLInputElement>('#name')?.value!;
    const email = document.querySelector<HTMLInputElement>('#email')?.value!;
    const password = document.querySelector<HTMLInputElement>('#password')?.value!;

    try {
      await Api.Register({ name, email, password });
      message.success('Successfully registered 😃');
    } catch (err) {}
  };

  render() {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 ">
        <form onSubmit={this.handleSubmit} className="flex w-[800px] flex-col gap-2">
        <Typography className="text-center text-3xl">Register Form</Typography>
          <Input id="name" placeholder="Your name" size="large" />
          <Input id="email" type="email" placeholder="email" size="large" />
          <Input.Password id="password" placeholder="password" size="large" />
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}
