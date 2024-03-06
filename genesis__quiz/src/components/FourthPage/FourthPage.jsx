import {
  useNavigate, useOutletContext
} from "react-router-dom";
import './FourthPage.scss';
import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import cn from 'classnames';

export const FourthPage = () => {
  const [percentage, setPercentage, progress, setProgress, isLoad, setIsLoad, setIsProgressVisible] = useOutletContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [clickedItems, setClickedItems] = useState([]);
  const hatesArray = ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'];
  const hatesMapping = {
    'Lack of logic': 'Lack of logic',
    'A slow speed': 'A slow speed',
    'Lack of humor': 'Lack of humor',
    'Way too generic ending': 'Way too',
  };

  const handleChecked = (hate) => {
    if (!clickedItems.includes(hate)) {
      setClickedItems(item => [...item, hate]);
    } else {
      setClickedItems(items => items.filter(item => item !== hate));
    }
  }

  const handleNext = () => {
    localStorage.setItem('hate', JSON.stringify(clickedItems));

    if (clickedItems.length > 0) {
      navigate('/5');
    }

    return;
  }

  useEffect(() => {
    localStorage.setItem('pageNumber', '4');
    setIsProgressVisible(true);
  }, [])

  return (
    <main className='main__fourth container'>
      <h1 className='question__fourth'>
        {t('What do you')} <span className="hate">{t('hate')}</span> {t('in a book?')}
      </h1>

      <ul className="options__fourth">
        {hatesArray.map(hate => (
          <li
            className={cn('option__block__fourth', {
              'option__block--active': clickedItems.includes(hate),
            })}
            key={hate}
            onClick={() => handleChecked(hate)}
          >
            <p className='option__fourth'>
              <Trans i18nKey={hatesMapping[hate]}>
                {hate}
              </Trans>
            </p>
            <button
              key={hate}
              type="button"
              name="checkbox"
              className={cn('choose__option__fourth', {
                'choosed__option': clickedItems.includes(hate),
              })}
            />
          </li>
        ))}
      </ul>

      <button
        className={cn('next-4', {
          able: clickedItems.length > 0,
        })}
        onClick={handleNext}
      >
        {t('Next')}
      </button>
    </main >
  )
}