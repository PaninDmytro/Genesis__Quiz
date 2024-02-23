import {
  Link, useNavigate
} from "react-router-dom";
import './FourthPage.scss';
import { useTranslation, Trans } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import cn from 'classnames';

export const FourthPage = () => {
  const { t } = useTranslation();
  const [, , progress, setProgress] = useOutletContext();
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
  
    localStorage.setItem('hate', JSON.stringify(clickedItems));
  }

  useEffect(() => {
    localStorage.setItem('pageNumber', '4');
  }, [])

  // localStorage.setItem('pageNumber', '4');

  return (
    <main className='main__fourth container'>
      <h1 className='question__fourth'>
        <Trans
          i18nKey='What do you hate'
          components={{ hate: <span className="hate"></span> }}
        >
          What do you <span className="hate">{t('hate')}</span> the most in a book?
        </Trans>
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

      <Link
        to={clickedItems.length === 0 ? null : '/5'}
        className={cn('next-4', {
          able: clickedItems.length > 0,
        })}>
        {t('Next')}
      </Link>
    </main >
  )
}