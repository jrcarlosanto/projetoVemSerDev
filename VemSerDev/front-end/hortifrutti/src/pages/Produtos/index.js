import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

import { Button, Card, message, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { FormOutlined, LoadingOutlined } from '@ant-design/icons'

export default function Produtos(){
    const [ produtos, setProdutos ] = useState([]);
    const [ loading, setLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        api.get('/item')
        .then((response) => {
        setProdutos(response.data);
        setLoading(true);
        new Produtos();
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado " + err.response.data.message);
        })
    },[]);

    return(
        <div className='produto__container'>
            	<h1>Relação de todos os Produtos</h1>
                <br/>
                {!loading?(
                    <Space className='loading'>
                        <LoadingOutlined style={{ fontSize: '500%'}}/>
                    </Space>
                 ) : (
                    <div className='produto__card__container' >
                    {produtos.map(produto => (
                        <Card key={produto.id} title={produto.name.substring(0,20)} bordered={false} style={{width: 280}}>
                            <p>
                                Descrição: {produto.description.substring(0,20)}
                            </p>
                            <p>
                                Quantidade: {produto.quantity}
                            </p>
                            <hr/>
                            <Button icon={<FormOutlined />} onClick={() => history.push(`/detalhes/${produto.id}`)}>
                                Detalhes
                            </Button>
                        </Card>
                    ))}
                    </div>
                 )
                }
        </div>
    )
}
