import {
  Link,
} from "react-router-dom";
import './Email.scss';
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";
import cn from 'classnames';

export const Email = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setError('');

    const { value } = event.target;
    setEmail(value);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setValid(isValid);
  }

  const handleError = () => {
    const invalid = !valid || !email;

    if (invalid) {
      setError('Invalid email')
    }
  }

  localStorage.setItem('email', email.toString());

  return (
    <main className='main__email container'>
      <div className='preferences__email'>
        <h1 className='question__email'>
          {t('Email')}
        </h1>
        <h2 className='choose__email'>
          {t('Enter email')}
        </h2>
      </div>

      <form className='form'>
        <input
          type='email'
          className={cn('email', {
            'wrong__email': error,
          })}
          placeholder={t('Your email')}
          onChange={handleChange}
        ></input>

        <p className={cn("error", {
          'visible__error': error,
        })}>{error}</p>
      </form>

      <p className="policy">
        {t('I agree')}{' '}
        <Link to='#' className='policy__link' format="link">
          {t('Privacy')}
        </Link>{' '}
        {t('and')}{' '}
        <Link to='#' className='policy__link' format="link">
          {t('Terms')}
        </Link>
      </p>

      <Link
        to={(valid && email) ? '/thanks' : ''}
        className={cn('next-thank', {
          'able-thank': valid && email,
        })}
        onClick={handleError}
      >
        {t('Next')}
      </Link>
    </main>
  )
}