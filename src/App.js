import './App.css';
import Homepage from './components/homepage';
import Loginpage from './components/login';
import Registerpage from './components/register';

function App() {
  return (
    <>
      <div className="App">
        {/* <Homepage/> */}
        {/* <Loginpage/> */}
        <Registerpage/>
      </div>
    </>
  );
}

export default App;
