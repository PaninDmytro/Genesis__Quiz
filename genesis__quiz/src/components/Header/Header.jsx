import { useEffect, useState } from 'react';
import './Header.scss';
import * as Progress from '@radix-ui/react-progress';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { GetParams } from '../../utils/getParams';


export const Header = ({
  progress,
  setProgress,
}) => {
  const [time, setTime] = useState(new Date());
  const realTime = time.toLocaleTimeString().slice(0, 5)
  const pageNumber = localStorage.getItem('pageNumber');
  const isLoad = localStorage.getItem('isLoad');
  const arrayOfPageNumber = [0, 1, 2, 3, 4, 5];
  const page = +(GetParams());
  const isProgressShov = arrayOfPageNumber.includes(page);

  console.log('isLoad', isLoad);
  console.log('page', page);
  console.log(arrayOfPageNumber.includes(+page));

  useEffect(() => {
    setProgress(pageNumber * 20);
  }, [pageNumber, progress]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(20), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <div className="vidgets">
        <p className="time">{realTime}</p>

        <div className="icons">
          <div className="icon signal__icon"></div>
          <div className="icon wifi__icon"></div>
          <div className="icon battery__icon"></div>
        </div>
      </div>

      <div className="progress__bar">

        <Link to={pageNumber > 1 && `/${pageNumber - 1}`} className={cn('back__icon', {
          'back__icon__invisible': pageNumber === '1' || pageNumber === '' || !isProgressShov,
        })}></Link>

        {isProgressShov && (
          <p className='page__number'><span className='number'>{pageNumber}</span>/5</p>
        )}

        <ul className='menu'>
          <li className='point'></li>
          <li className='point'></li>
          <li className='point'></li>
        </ul>
      </div>

      {isProgressShov && (
        <Progress.Root className="ProgressRoot" value={progress}>
          <Progress.Indicator
            className="ProgressIndicator"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      )}
    </header>
  )
}