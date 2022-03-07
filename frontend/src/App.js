import './App.css';
import {Navbar, Create} from './components'
import {Routes, Route} from 'react-router-dom' 
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Create/> */}
      <Routes>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
