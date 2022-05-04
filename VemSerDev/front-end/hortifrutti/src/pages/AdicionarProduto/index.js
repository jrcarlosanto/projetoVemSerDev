import { useHistory } from 'react-router-dom';
import './styles.css';
import React, { useState } from 'react';
import api from '../../services/api';
import { message, Form, Input, Button, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function AdicionarProduto(){
    const [disabled, setDisabled] = useState(false);

    const history = useHistory();

    async function handleSubmit(produto){
        setDisabled(true);
        api.post('/item', produto)
        .then((response) => {
            if(response.status === 201){
                message.success('Produto criado com sucesso!', 3);
                history.push('/produtos');
            }
        })
        .catch((err) => {
            message.error('Aconteceu um erro ao adicionar produto ' + err.response.data.message);
            setDisabled(false);
        })
    }
    return(
        <div className='produto__container'>
            <h1>Adicionar novo produto</h1>
            <br/>
            <div>
                <Form
                name='submiProduto'
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                onFinish={handleSubmit}
                autoComplete='off'
                layout= "hotizontal"
                >
                    <Form.Item
                    label='Nome do item'
                    name='name'
                    rules={[{required: true, message: "O nome do item não pode ser vazio"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                    label='Descrição'
                    name='description'
                    rules={[{required: true, message: "Insira a descrição do item"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                    label='Quantidade'
                    name='quantity'
                    rules={[{required: true, message: "Insira a quantidade"}]}
                    >
                        <InputNumber min={1} />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primaty' htmlType='submit' icon={<PlusOutlined />} disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}