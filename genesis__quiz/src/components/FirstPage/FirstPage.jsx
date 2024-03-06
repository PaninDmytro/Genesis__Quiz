import {
  Link, useNavigate, useOutletContext
} from "react-router-dom";
import './FirstPage.scss';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const FirstPage = () => {
  const [percentage, setPercentage, progress, setProgress, isLoad, setIsLoad, setIsProgressVisible] = useOutletContext();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const languagesArray = ['English', 'French', 'German', 'Spanish'];
  const languagesOption = ['en', 'fr', 'de', 'es'];

  const handleChangeLanguage = (language, index) => {
    changeLanguage(languagesOption[index]);
    localStorage.setItem('language', language.toString());
    navigate('/2');
  }

  useEffect(() => {
    localStorage.setItem('pageNumber', '1');
    setIsProgressVisible(true);
  }, [])

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