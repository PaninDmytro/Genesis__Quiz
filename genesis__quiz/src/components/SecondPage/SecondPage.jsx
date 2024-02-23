import {
  Link, useNavigate
} from "react-router-dom";
import './SecondPage.scss';
import Male from '../../pictures/male.png';
import Female from '../../pictures/female.png';
import Other from '../../pictures/other.png';
import { useTranslation, Trans } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

export const SecondPage = () => {
  const { t, i18n } = useTranslation();
  const [, , progress, setProgress] = useOutletContext();
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const gendersArray = ['Female', 'Male', 'Other'];

  // useEffect(() => {
  //   setProgress(progress => progress + 20);
  // }, []);

  useEffect(() => {
    localStorage.setItem('pageNumber', '2');
  }, [])

  // localStorage.setItem('pageNumber', '2');

  const handleChooseAge = (gender) => {
    setGender(gender);
    localStorage.setItem('gender', gender.toString());
    navigate('/5');
  }

  return (
    <main className='main__second container'>
      <div className='preferences__second'>
        <h1 className='question__second'>
          {t('What gender')}
        </h1>

        <h2 className='choose__second'>
          {t('Please share')}
        </h2>
      </div>

      <ul className="genders">
        {gendersArray.map(gender => (
          <Link
            to='/3'
            className='gender__option__block'
            key={gender}
            onClick={() => handleChooseAge(gender)}
          >
            <img
              src={gender === 'Female' ? Female : (gender === 'Male' ? Male : Other)}
              alt={gender}
              className='gender__image'>
            </img>
            <p className='gender__option'>
              <Trans
                i18nKey={gender === 'Female' ? 'Female' : (gender === 'Male' ? 'Male' : 'Other')}
              >
                {gender}
              </Trans>
            </p>
          </Link>
        ))}
      </ul>
    </main>
  )
}