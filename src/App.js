import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/Main/Shop/Shop';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import OrderPage from './components/OrderPage/OrderPage';
import Burek from './components/OurFoodItems/Burek/Burek';
import Chicken from './components/OurFoodItems/Chicken/Chicken';
import Fresh from './components/OurFoodItems/Fresh/Fresh';
import Rice from './components/OurFoodItems/Rice/Rice';
import Vegetable from './components/OurFoodItems/Vegetable/Vegetable';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>}>
        <Route path='/chicken' element={<Chicken/>}></Route>
          <Route path='/burek' element={<Burek/>}></Route>
          <Route path='/fresh' element={<Fresh/>}></Route>
          <Route path='/rice' element={<Rice/>}></Route>
          <Route path='/Vegetable' element={<Vegetable/>}></Route>

        </Route>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/productItems/:id' element={<OrderPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
