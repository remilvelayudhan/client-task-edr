
import './App.css';
import { GroupPannel } from './components/groupPanel/GroupPannel';
import {Menu} from './components/menu/Menu'
import {Info} from './components/info/Info'
import {Header} from './components/header/Header'

function App() {
  return (
  
    <div className="container-fluid"> 
    <div className='menu'>{<Menu/>}</div>
    <div className='header'>{<Header/>}</div>
    <div className='group-metre'>{<GroupPannel/>}</div>
    <div className='main-metre'>main-metre</div>
    <div className='chat'>chat</div>
    <div className='info-bar'>{<Info/>}</div>
    <div className='buttom-bar'>buttom-bar</div>
    </div>
  );
}

export default App;
