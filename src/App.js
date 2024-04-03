import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import LinkButton from './components/LinkComponent';
import Link from './components/Link';
import ListComponent from './components/ListComponent';
import GoogleLogin from './components/GoogleLogin';

function App() {
  let items = ["Content", "Infomation","List"]
  return (
    <div className='App'>

      <nav className='App-header'> 
          <div className='nav-inline'>
            <span className='logo-ma'><h1 className='App-logo'>Notion</h1></span>
            <span className = 'btn-left'><LinkButton text={"Sign in"}/></span>
          </div>
      </nav>

      <div className ="App-sidebar sidebar">
        <ListComponent className='il-sidebar' items={items}/>
      </div>

      <div className='App-content'>
        <div className='App-link'>
          <span style={{ display: 'inline-block', marginRight:'20px' }}><Link text='Content'/></span>
          <span style={{ display: 'inline-block', marginRight:'20px' }}><p>/</p></span>
          <span style={{ display: 'inline-block' }}><Link text='Sign in'/></span>
        </div>

        <h1 className='bot-margin'>Sign in</h1>
          <GoogleLogin/>
      </div>
    </div>
  );
}

export default App;
