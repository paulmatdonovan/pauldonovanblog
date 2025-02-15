import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home.jsx'
import Article from './Components/Articles/Article.jsx'
import ArticleFull from './Pages/ArticleList/ArticleFull.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer.jsx';
import articles from './Assets/articles.js';

function App() {

  const [articleState, setArticleState] = useState([]);

  useEffect(() => {
    setArticleState(articles);
      }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/articles' element={<Article posts={articleState}/>}/>
<Route path='/article/:id' element={<ArticleFull posts={articleState}/>}>
</Route>
<Route path='/products' element={<Products/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
  
}

export default App;
