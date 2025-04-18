import { Routes, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { ArticleList } from './pages/ArticleList';
import { ArticleDetail } from './pages/ArticleDetail';
import './App.css';
import { Contact } from './pages/Contact';

const App:React.FC =() => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/posts/:id" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
