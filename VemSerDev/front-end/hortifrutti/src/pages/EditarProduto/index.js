import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

import { Button, Input, message, InputNumber } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons'

export default function EditarProduto(){

    const history = useHistory();
    const location = useLocation();
    
    const [ produtoEdit, setProdutoEdit ] = useState({});
    const [ disabled, setDisabled ] = useState(false);

    useEffect(() => {
        setProdutoEdit({...location.state}); //copia
    },[location]);

    async function handleSubmitEdit(produto){
        setDisabled(true);
        api.patch(`/item/${produto.id}`, produto)
        .then((response) => {
            if(response.status === 200){
                message.success("Produto editador com sucesso!", 3);
                history.push(`/produtos`);
            }
        })
        .catch((err) =>{
            message.error("Aconteceu um erro inesperado " + err.response.data.message);
            setDisabled(false);
        })
    }

    return(
        <div className='produto__container'>
            	<h1>Editar Produto</h1>
                <br/>
                <div className='produto__edit'>
                    <div className='produto__campo'>
                        <span className='porduto__label'>Nome do produto </span>
                        <Input value={produtoEdit?.name} onChange={(e) => {
                            setProdutoEdit((produtoEdit) => {
                                return{...produtoEdit, name: e.target.value}
                            })
                        }}/>
                    </div>
                    <div className='produto__campo'>
                        <span className='porduto__label'>Descrição do produto </span>
                        <Input value={produtoEdit?.description} onChange={(e) => {
                            setProdutoEdit((produtoEdit) => {
                                return{...produtoEdit, description: e.target.value}
                            })
                        }}/>
                    </div>
                    <div className='produto__campo'>
                        <span className='porduto__label'>Quantidade do produto </span>
                        <InputNumber value={produtoEdit?.quantity} min={1} onChange={(e) => {
                            setProdutoEdit((produtoEdit) => {
                                return{...produtoEdit, quantity: e}
                            })
                        }}/>
                    </div>
                    <br/>            
                    <Button className='editar__btn' icon={<EditOutlined />} 
                    onClick={() => handleSubmitEdit(produtoEdit)} disabled={disabled}>
                            Editar
                    </Button>
                </div>
        </div>
    )
}
