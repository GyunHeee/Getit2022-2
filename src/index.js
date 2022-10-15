import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook-2';
import SignUp from './chapter_11/SignUp-2';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));

  /*
  root.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
  );
  */

  //6챕터
  /*
  root.render(
    <React.StrictMode>
      <NotificationList/>
    </React.StrictMode>
  );
  */
  
  //7쳅터
  /*
  root.render(
    <React.StrictMode>
      <Accommodate />
    </React.StrictMode>
  );
  */

  //8챕터
  /*
  root.render(
    <React.StrictMode>
      <ConfirmButton />
    </React.StrictMode>
  )
  */

  //9챕터
/*
  root.render(
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  )
  */

  //10챕터
  /*
  root.render(
    <React.StrictMode>
      <AttendanceBook />
    </React.StrictMode>
  )
  */

  //11챕터
  /*
  root.render(
    <React.StrictMode>
      <SignUp/>
    </React.StrictMode>
  )
  */

  //12챕터
  /*
  root.render(
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  )
  */

  //13챕터
  /*
  root.render(
    <Reac>
      <ProfileCard />
    </Reac
    */
   
    // 14챕터
    root.render(
      <React.StrictMode>
        <DarkOrLight />
      </React.StrictMode>
    )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
