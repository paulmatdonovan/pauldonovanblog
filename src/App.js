import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home.jsx'
import Article from './Components/Articles/Article.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer.jsx';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://server-1-gaf8.onrender.com/posts")
      .then((r) => r.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/articles' element={<Article posts={articles}/>}/>
<Route path='/contact' element={<Contact/>}/>

<Route path='/article:id' element={<Article/>}>
</Route>
<Route path='/products' element={<Products/>}/>



      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
  
}

export default App;
