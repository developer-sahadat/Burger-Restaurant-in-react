import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/Main/Shop/Shop';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import OrderPage from './components/OrderPage/OrderPage';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/productItems/:id' element={<OrderPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
