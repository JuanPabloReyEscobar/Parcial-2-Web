import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import PinterestLayout from './components/PinterestLayout';

const App = () => {

  if(window.innerWidth > 375){
    return (
    
      <div>
        <Header/>
        <PinterestLayout/>
     </div>
    );
  }else{
    return (
    
      <div>
        <HeaderMobile/>
        <PinterestLayout/>
        <Footer/>
      </div>
    );
  }  
};

export default App