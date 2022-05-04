import './App.css';

import { Menu} from 'antd';

import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
import  Routes  from './routes.js';
import { useHistory } from 'react-router-dom';
import Logo from '../src/pages/assets/logo.png';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  
  const history = useHistory();

  return (
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>
          <a>
            <img src={Logo} alt='logo' className='logo' onClick={() => history.push('/')}/>
          </a>
          <h1> BEM VINDO(A)!</h1>
        </Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={<PlusOutlined />}
              onClick={() => history.push('/adicionar')}
              >
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={2} icon={<UnorderedListOutlined />}
              onClick={() => history.push('/produtos')}
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
