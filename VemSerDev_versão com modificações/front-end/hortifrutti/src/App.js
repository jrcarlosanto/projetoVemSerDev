import './App.css';

import { Menu} from 'antd';

import { PlusOutlined, UnorderedListOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Layout} from 'antd';
import  Routes  from './routes/routes.js';
import { useHistory, useLocation } from 'react-router-dom';
import Logo from '../src/pages/assets/logo.png';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  
  const history = useHistory();
  const location = useLocation();
  const [ user, setUser ] = useState({...location.state});

  return (
    
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>
          <a>
            <img src={Logo} alt='logo' className='logo' onClick={() => history.push(`/${user.id}`, user)}/>
          </a>
          <h1> Perfil: {user.name}</h1>
          <LogoutOutlined onClick={() => history.push('/login')}  className='login' style={{ fontSize: '32px' }}/>

        </Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={<PlusOutlined />}
              onClick={() => history.push(`/adicionar/${user.id}`,user)}
              >
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={2} icon={<UnorderedListOutlined />}
              onClick={() => history.push(`/produtos/${user.id}`, user)}
              >
                Listar Produto
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className='content'>
            <Routes />
          </Content>
        </Layout>
        <Footer className='footer'>Todos os direitos reservados</Footer>
      </Layout>
    </div>
  );
}

export default App;
