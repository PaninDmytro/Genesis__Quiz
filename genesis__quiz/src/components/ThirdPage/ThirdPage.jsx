import {
  useNavigate
} from "react-router-dom";
import './ThirdPage.scss';
import { useTranslation, Trans } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

export const ThirdPage = () => {
  const { t } = useTranslation();
  const [, , progress, setProgress] = useOutletContext();
  const navigate = useNavigate();
  const [age, setAge] = useState(0);
  const agesArray = ['18-29 years', '30-39 years', '40-49 years', '50+'];
  const agesMapping = {
    '18-29 years': '18-29',
    '30-39 years': '30-39',
    '40-49 years': '40-49',
    '50+': '50+',
  };

  const handleChooseAge = (age) => {
    setAge(age);
    localStorage.setItem('age', age.toString());
    navigate('/4');
  }

  useEffect(() => {
    localStorage.setItem('pageNumber', '3');
  }, [])


  return (
    <main className='main__third container'>
      <h1 className='question__third'>
        {t('What age?')}
      </h1>

      <ul className="options__third">
        {agesArray.map(age => (
          <button
            to='/4'
            className='option__block__third'
            key={age}
            onClick={() => handleChooseAge(age)}
          >
            <p className='option__third'>
              <Trans i18nKey={agesMapping[age]}>
                {age}
              </Trans>
            </p>
          </button>
        ))}
      </ul>
    </main>
  )
}