import logo from './logo.svg';
import './App.css';
import { AnimateSharedLayout } from "framer-motion";

import { Navbar } from './components/Navbar';
import { Recipes } from './components/Recipes';

function App() {
  return (
    <>
      <Navbar/>
      <h1>Recipes</h1>
      <div class="container">
        <Recipes />
      </div>
    </>
  );
}

export default App;
