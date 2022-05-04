import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'antd';
import './styles.css';
import Logo from '../assets/logo.png';
import { UnorderedListOutlined } from '@ant-design/icons'
import { useState } from 'react';

export default function Inicio(){
    
    const[disable, setDisable] = useState(false);
    const history = useHistory();
    let { userId } = useParams();

    async function listarProdutos(){
        setDisable(true);
        history.push(`/produtos/${userId}`);
    }
    return(
        <div className='inicio__container'>
            <section>
                <img src={Logo} alt='logo' className='center'/>
                <br/>
                <Button className='center' icon={<UnorderedListOutlined />} disabled={disable} onClick={listarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
}