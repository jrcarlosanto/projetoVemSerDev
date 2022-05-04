import './styles.css';
import Frutas from '../assets/Hortifruti-login.jpg';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import api from '../../services/api';
import Logo from '../assets/logo.png';

export default function Login(){
    
    const history = useHistory();
    const [disable, setDisable ] = useState(false);

    const onFinish = (user) => {
      setDisable(true);
        api.post('/auth/login',user)
        .then((response) => {
            if(response.data.id !== undefined){
                history.push(`/${response.data.id}`,response.data);
                message.success(`Bem vindo ${response.data.name}`)
            } else {
              message.error('Usuário ou senha errados',5);
              setDisable(false);
            }
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado " + err.response.data.message);
            setDisable(false);
        })
    };

    return (    
    <Row>
      <Col span={9}>
        <img src={Frutas} alt='frutas' className='image__fundo' />
        <img src={Logo} alt='logo' className='image__logo'/>
      </Col>
      <Col span={15}>
        <div className='title__login'>
          <h1>Faça seu login</h1>
        </div>
        <Form
            name="basic"
          labelCol={{
            span: 9,
          }}
          wrapperCol={{
            span: 60,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Inserir o email',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[
              {
                required: true,
                message: 'Inserir a senha',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
          wrapperCol={{
            offset: 9,
            span: 14,
          }}
          >
            <a onClick={() => history.push("/createUser")}>Ainda não se cadastrou? </a>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 14,
            }}
          >
            <Button type="primary" htmlType="submit" disabled={disable}>
              Entrar
            </Button>
          </Form.Item>
        </Form> 
        </Col>
  </Row>
  );
}