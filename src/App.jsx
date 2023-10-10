
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allrest from './Componants/Allrest/Allrest';
import Footer from './Componants/Footer/Footer';
import Header from './Componants/Header/Header';
import Viewrest from './Componants/Viewrest/Viewrest';



function App() {
  return (
    <div className="App">
      
      <Header/>
     <Routes>
      <Route path='/' element={ <Allrest/>}/>
      {/* view particular restaurant */}
      <Route path='/view/:id' element={<Viewrest/>}/>   {/* :is use for variable addind */}
     </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
