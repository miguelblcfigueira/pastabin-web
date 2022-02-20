import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import PasteForm from './PasteForm';
import PasteViewer from './PasteViewer';
import Header from './components/header';
import GlobalStyle from './globalStyles';
import ContentContainer from './components/content-container';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<PasteForm />} />
          <Route path="/:pasteId" element={<PasteViewer />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
