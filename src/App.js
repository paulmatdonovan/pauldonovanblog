import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home.jsx'
import Article from './Components/Articles/Article.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products.jsx'
import Contact from './Pages/Contact/Contact.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/articles' element={<Article/>}/>
<Route path='/contact' element={<Contact/>}/>

<Route path='/article:id' element={<Article/>}>
</Route>
<Route path='/products' element={<Products/>}/>



      </Routes>
      </BrowserRouter>

    </div>
  );
  
}

export default App;
