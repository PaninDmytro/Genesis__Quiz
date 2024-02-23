import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="adress">
        <div className='register adress__icon'><a href='#'></a></div>

        <div className="domain">
          <div className="lock__icon"></div>
          <div className="domain__com">domain.com</div>
        </div>

        <div className="refresh adress__icon"></div>
      </div>

      <nav className='nav'>
        <ul className='navigation'>
          <li ><a href='#' className='footer__icon arrow__left'></a></li>
          <li><a href='#' className='footer__icon arrow__right'></a></li>
          <li><a href='#' className='footer__icon share'></a></li>
          <li><a href='#' className='footer__icon book'></a></li>
          <li><a href='#' className='footer__icon copie'></a></li>
        </ul>
      </nav>

      <div className='underline'></div>
    </footer>
  )
}