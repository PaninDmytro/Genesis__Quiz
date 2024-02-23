import {
  Outlet
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import './App.scss';
import { useState } from "react";

export const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  localStorage.setItem('isLoad', isLoad.toString());

  return (
    <div className="app">
      <Header 
        progress={progress}
        setProgress={setProgress}
      />

      <Outlet
        context={[percentage, setPercentage, progress, setProgress, isLoad, setIsLoad]}
      />

      <Footer />
    </div>
  )
}