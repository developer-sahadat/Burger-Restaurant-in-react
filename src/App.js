import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderBG from './components/SliderBG/SliderBG';
import Shop from './components/Main/Shop/Shop';
import OurSpecialRecipe from './components/OurSpecialRecipe/OurSpecialRecipe';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
      <Header></Header>
      <SliderBG></SliderBG>
      <Shop></Shop>
      <OurSpecialRecipe></OurSpecialRecipe>
      <Contact></Contact>
    </div>
  );
}

export default App;
