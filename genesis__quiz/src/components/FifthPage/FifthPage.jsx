import {
  Link
} from "react-router-dom";
import './FifthPage.scss';
import wolf from '../../pictures/wolf.png';
import lovely from '../../pictures/lovely.png';
import dance from '../../pictures/dance.png';
import young__adult from '../../pictures/young__adult.png';
import crown from '../../pictures/crown.png';
import cowboy from '../../pictures/cowboy.png';
import money from '../../pictures/money.png';
import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { useOutletContext } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useEffect } from "react";
import cn from 'classnames';

export const FifthPage = () => {
  const [clickedItems, setClickedItems] = useState([]);
  const [percentage, setPercentage, progress, setProgress, isLoad, setIsLoad] = useOutletContext();
  const { t } = useTranslation();
  const emojisArray = ['Werewolf', 'Romance', 'Action', 'Young Adult', 'Royal Obsession', 'Bad Boy', 'Billionaire'];
  const emojisObject = {
    'Werewolf': wolf,
    'Romance': lovely,
    'Action': dance,
    'Young Adult': young__adult,
    'Royal Obsession': crown,
    'Bad Boy': cowboy,
    'Billionaire': money,
  }

  const handleChecked = (emoji) => {
    if (!clickedItems.includes(emoji)) {
      if (clickedItems.length <= 2) {
        setClickedItems(item => [...item, emoji]);
      } else {
        return;
      }
    } else {
      setClickedItems(items => items.filter(item => item !== emoji));
    }
  }

  const handleLoade = () => {
    localStorage.setItem('emojis', JSON.stringify(clickedItems));

    if (clickedItems.length === 0) {
      return;
    } else {
      setIsLoad(true);
      setProgress(progress => progress + 1);
    }

    console.log('isLoad', isLoad);
  }

  useEffect(() => {
    localStorage.setItem('pageNumber', '5');
  }, [])

  return (
    <>
      {
        (isLoad && percentage !== 100) ? (
          <Loader />
        ) : (
          <main className='main__fifth container'>
            <div className='preferences__fifth'>
              <h1 className='question__fifth'>
                {t('What favorite topics?')}
              </h1>
              <h2 className='choose__fifth'>
                {t('Choose up')}
              </h2>
            </div>

            <ul className="emojis">
              {emojisArray.map(emoji => (
                <li
                  className={cn('emoji__option__block', {
                    'emoji__option__block--active': clickedItems.includes(emoji),
                  })}
                  onClick={() => handleChecked(emoji)}
                >
                  <img src={emojisObject[emoji]} alt="wolf" className='emoji__image'></img>

                  <p className='emoji__option'>
                    <Trans i18nKey={emoji}>
                      {emoji}
                    </Trans>
                  </p>
                </li>
              ))}
            </ul>

            <div
              className={cn('next-5', {
                'able-5': clickedItems.length > 0,
              })}
              onClick={handleLoade}
            >
              {t('Next')}
            </div>
          </main >
        )
      }
    </>
  )
}