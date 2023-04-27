import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import QuiltedImage from './components/QuiltedImage';
import SignIn from './components/SignIn';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dog from './components/Dog';
import Cat from './components/Cat';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Dog/>
    </div>
  );
}

export default App;
