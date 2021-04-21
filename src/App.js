import logo from './logo.svg';
import './App.css';
import { AnimateSharedLayout } from "framer-motion";

import { Navbar } from './Navbar';
import { Recipes } from './Recipes';

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
