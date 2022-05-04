import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

import { Button, Card, message, Modal, Space } from 'antd';

import {useHistory, useParams} from 'react-router-dom';

import { ExclamationCircleOutlined, EditOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons'

export default function DetalhesProduto(){
    const [ produto, setProduto ] = useState([]);
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);

    let { userId, id } = useParams();

    const { confirm } = Modal;

    function showConfirm(produto) {
        confirm({
            title: 'Confirmar a exclusão do produto?',
            icon: <ExclamationCircleOutlined />,
            content: produto.name,
            okText: 'Sim',
            cancelText: 'Não',
            onOk(){
                handleDelete(produto.id);
            },
            onCancel(){
                
            },
        });
    }

    function handleDelete(id){
        api.delete(`/item/${userId}/${id}`)
        .then((response) => {
            message.success("Produto foi excluido com sucesso!");
            history.push(`/produtos/${userId}`);
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado" + err.response.data);
        })
    }

    useEffect(() => {
        api.get(`/item/${userId}/${id}`)
        .then((response) => {
            setProduto(response.data);
            setLoading(true);
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado" + err.response.data);
        })
    },[]);

    return(
        <div className='produto__container'>
            	<h1>Detalhes do produto</h1>
                <br/>
                {!loading?(
                    <Space className='loading'>
                        <LoadingOutlined style={{ fontSize: '500%'}}/>
                    </Space>
                 ) : (
                    <div className='produto__card__container'>
                        <Card key={produto.id} title={produto.name} bordered={false}>
                            <p>
                                Id: {produto.id}
                            </p>
                            <p>
                                UpdatedAt: {produto.updatedAt}
                            </p>
                            <p>
                                Descrição: {produto.description}
                            </p>
                            <p>
                                Quantidade: {produto.quantity}
                            </p>
                            <hr/>
                            <br/>
                            <div className='produto__card__actions'>
                                <Button type='primary' success icon={<EditOutlined />} 
                                onClick={() => history.push(`/editar/${userId}/${id}`, produto)}>
                                    editar produto
                                </Button>
                                <Button type='primary' danger icon={<DeleteOutlined />} onClick={() => showConfirm(produto)}>
                                    excluir produto
                                </Button>
                            </div>
                        </Card>
                </div>)
            }
        </div> 
    )
}
