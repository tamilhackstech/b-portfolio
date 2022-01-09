import logo from './logo.svg';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodoApp from "./components/Todoapp/Todoapp";
import { BrowserRouter, Routes,  Route, } from "react-router-dom";


import "./style.css";

function App() {
  return (
    <BrowserRouter>
  {/* <Preloader load={load} /> */}
    <div className="App" >
      <Navbar />
     
        <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route path='/ToDoApp' element={<TodoApp/>} />
        </Routes>
      
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
