import React from 'react'
import {Form,Input} from 'antd'
import {Link}  from 'react-router-dom'

const Register = () => {
  const onFinish =(values)=>{
    console.log('Register values of Form:',values);
  }
  return (
    <div className='authentication'>
      <div className='authentication-form card p-4'>
        <h1 className='card-title'> Nice To Meet You</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' type='password' />
          </Form.Item>
        <button className='primary-button my-2' htmlType='submit'>REGISTER</button>
        <Link to='/login' className='anchor '>CLICK HERE TO LOGIN</Link>

        </Form>
      </div>
    </div>
  )
}

export default Register