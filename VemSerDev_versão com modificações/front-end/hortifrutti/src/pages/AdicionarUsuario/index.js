import './styles.css';
import Frutas from '../assets/Hortifruti-login.jpg';
import { Form, Input, Button,  Row, Col, message } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import api from '../../services/api';
import Logo from '../assets/logo.png';

export default function AdicionarUsuario(){
    
    const history = useHistory();
    const [ disable, setDisable ] = useState(false);

    const onFinish = (user) => {
      setDisable(true);
        api.post('/users',user)
        .then((response) => {
            if(response.status === 201){
                history.push(`/${response.data.id}`,response.data);
                message.success(`Ben vindo(a) ${response.dada.name}`,5);
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
        <div className='title'>
          <h1>Cria conta</h1>
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
          label="Nome"
          name="name"
          rules={[
            {
            required: true,
            message: 'Inserir o nome',
            },
          ]}
          >
            <Input />
          </Form.Item>
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
            <Button type="primary" htmlType="submit" disabled={disable}>
              Cadastrar
            </Button>
          </Form.Item>
        </Form> 
        </Col>
      </Row>
  );
}