
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';
import Detail from './pages/Detail';


function App() {


  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/hntv" element={<Layout />}>
        <Route index element={<Project />} />
        <Route path="/hntv/aboutme" element={<About />} />
        <Route path="/hntv/contact" element={<Contact />} />
        <Route path="/hntv/project/:id" element={<Detail/>}/>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
