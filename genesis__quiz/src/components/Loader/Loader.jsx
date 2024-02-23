import { useEffect, useState } from 'react';
import './Loader.scss';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useOutletContext, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export const Loader = () => {
  const [percentage, setPercentage,,,] = useOutletContext();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const total = 5000;
    const intervalTime = 50;

    const interval = setInterval(() => {
      setPercentage((current) => {
        const nextProgress = current + 1;

        if (nextProgress >= 100) {
          clearInterval(interval);
          navigate('/email');

          return 100;
        }

        return nextProgress;
      })
    }, intervalTime)

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='main__loader container'>
      <div className='circle__container'>
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={5}
          styles={buildStyles({
            textSize: '25px',
            pathTransitionDuration: 0.5,
            pathColor: `#E4229C`,
            textColor: '#fff',
            trailColor: '#E8EAF2',
          })}
        >
          <p className='percentage'>{percentage}%</p>
        </CircularProgressbarWithChildren>
      </div>

      <p className='findingText'>
        {t('Finding')}
      </p>
    </main>
  )
}