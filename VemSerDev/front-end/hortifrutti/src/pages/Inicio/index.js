import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import './styles.css';
import Logo from '../assets/logo.png';
import { UnorderedListOutlined } from '@ant-design/icons'
import { useState } from 'react';

export default function Inicio(){
    
    const history = useHistory();
    const [ disable, setDisable ] = useState(false);

    async function listarProdutos(){
        setDisable(true);
        history.push("/produtos");
    }
    return(
        <div className='inicio__container'>
            <section>
                <img src={Logo} alt='logo' className='center'/>
                <br/>
                <Button className='center' icon={<UnorderedListOutlined />} onClick={listarProdutos} 
                disabled={disable}>Ver Produtos</Button>
            </section>
        </div>
    )
}