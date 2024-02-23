import {
  HashRouter as Router, Routes,
  Route
} from "react-router-dom";
import { App } from './App';
import { FirstPage } from './components/FirstPage/FirstPage';
import { SecondPage } from './components/SecondPage/SecondPage';
import { ThirdPage } from './components/ThirdPage/ThirdPage';
import { FourthPage } from './components/FourthPage/FourthPage';
import { FifthPage } from './components/FifthPage/FifthPage';
import { FindingColection } from './components/Loader/Loader';
import { Email } from './components/Email/Email';
import { ThankYou } from './components/ThankYou/ThankYou';


export const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<FirstPage />}></Route>
        <Route path="1" element={<FirstPage />}></Route>
        <Route path='2' element={<SecondPage />}></Route>
        <Route path='3' element={<ThirdPage />}></Route>
        <Route path='4' element={<FourthPage />}></Route>
        <Route path='5' element={<FifthPage />}></Route>
        {/* <Route path='loader' element={<FindingColection />}></Route> */}
        <Route path='email' element={<Email />}></Route>
        <Route path='thanks' element={<ThankYou />}></Route>

        <Route path='*' element={<h1>Page not found</h1>}></Route>
      </Route>
    </Routes>
  </Router>
);
