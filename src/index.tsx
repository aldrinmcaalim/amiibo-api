import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import AmiiboCharacterLookUp from './components/amiibo-character-lookup';


ReactDOM.render(
  <React.StrictMode>
    <Intro></Intro>
    <AmiiboCharacterLookUp></AmiiboCharacterLookUp>
  </React.StrictMode>,
  document.getElementById('root')
);

