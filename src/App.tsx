import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Games from './pages/Games';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="games" element={<Games />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
