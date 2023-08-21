
import './App.css';
import {Menu} from './components/menu/Menu'
import {Info} from './components/info/Info'
import {Header} from './components/header/Header'
import {Chat} from './components/chat/Chat'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey ,faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons';
import { GroupPannel } from './components/groupPanel/GroupPannel';

library.add(faEnvelope, faKey,faBell);



function App() {
  return (
  
    <div className="container-fluid"> 
    <div className='menu'>{<Menu/>}</div>
    <div className='header'>{<Header/>}</div>
    <div className='group-metre'>{<GroupPannel/>}</div>
    <div className='main-metre'>main-metre</div>
    <div className='chat'>{<Chat/>}</div>
    <div className='info-bar'>{<Info/>}</div>
    <div className='buttom-bar'>buttom-bar</div>
    </div>
  );
}

export default App;
