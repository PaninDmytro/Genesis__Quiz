import {
  Link, useOutletContext
} from "react-router-dom";
import './ThankYou.scss';
import checkmark from '../../pictures/checkmark.png';
import { useTranslation, Trans } from "react-i18next";
// import { createCSVRow } from "../../utils/dataForScv";
import { CSVLink, CSVDownload } from "react-csv";
// import { useState } from "react";
import { data, getCsvData } from "../../utils/dataForFile";
import { useState } from "react";
// import Papa from "papaparse";

export const ThankYou = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  // const [percentage, setPercentage, , , setIsProgressOff] = useOutletContext();
  const [percentage, setPercentage, progress, setProgress, isLoad, setIsLoad] = useOutletContext();

  const handleRetake = () => {
    setIsLoad(false);
    // setIsProgressOff(false);
    localStorage.clear();
  }

  const handleDownload = (event, done) => {
    setData(getCsvData());
    done();
  }

  console.log(data);

  return (
    <main className='main__thank container'>
      <div className='preferences__thank'>
        <h1 className='thank__you'>{t('Thank you')}</h1>
        <h2 className='choose__thank'>{t('for supporting')}</h2>
      </div>

      <img src={checkmark} className='checkmark' alt='checkmark'></img>

      <CSVLink
        data={data}
        className='download'
        separator=";"
        asyncOnClick={true}
        onClick={handleDownload}
        filename={"Quiz_Result.csv"}
      >
        <div className="download__icon"></div>
        <p className="donload__text">{t('Download')}</p>
      </CSVLink >

      <Link
        to='/'
        className='retake'
        onClick={handleRetake}
      >
        {t('Retake quiz')}
      </Link>
    </main>
  )
}