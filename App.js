import "./app.scss";
import {BrowserRouter as Router , Routes, Route}  from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/home/header/header"

function App() {
  return (
    <Router>

      <Header/>
      <Home/>
      <div className="App"></div>
      <Routes>

      </Routes>
    </Router>
    
  );
}

export default App;
