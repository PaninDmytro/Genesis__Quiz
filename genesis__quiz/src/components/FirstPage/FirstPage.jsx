import {
  Link, useNavigate, useOutletContext
} from "react-router-dom";
import './FirstPage.scss';
import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";

export const FirstPage = () => {
  const [language, setLanguage] = useState('');
  const [percentage, setPercentage,,,] = useOutletContext();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const languagesArray = ['English', 'French', 'German', 'Spanish'];
  const languagesOption = ['en', 'fr', 'de', 'es'];

  const handleChangeLanguage = (language, index) => {
    changeLanguage(languagesOption[index]);
    setLanguage(language);
    localStorage.setItem('language', language.toString());
    navigate('/2');
  }

  // useEffect(() => {
  //   setIsProgressOff(false);
  // },[])
  useEffect(() => {
    localStorage.setItem('pageNumber', '1');
  }, [])
  // localStorage.setItem('pageNumber', '1');
  // localStorage.setItem('progressOff', false.toString());

  return (
    <main className='main__first container'>
      <div className='preferences__first'>
        <h1 className='question__first'>What is your preferred language?</h1>
        <h2 className='choose__first'>Choose language</h2>
      </div>

      <ul className="options__first">
        {languagesArray.map((language, index) => (
          <button
            className='option__block__first'
            key={language}
            onClick={() => handleChangeLanguage(language, index)}
          >
            <p className='option__first'>{language}</p>
          </button>
        ))}
      </ul>
    </main>
  )
}