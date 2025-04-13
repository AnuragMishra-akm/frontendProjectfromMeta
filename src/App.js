import './App.css';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from '../../my-application/src/Footer';
import Header from '../../my-application/src/Header';
import Main from '../../my-application/src/Main';
import icon from './logo.svg';

function App() {
  return (
    <Router>
      <>
      <meta name='description' content='This is a food ordering and reserving a table app for Little Lemon restaurant' /> {/* Corrected here */}
      <meta name='og:title' content='Little Lemon' />
      <meta name='og:description' content='This is a food ordering and reserving a table app for Little Lemon restaurant' /> {/* Corrected here */}
      <meta name='og:image' content={icon} />

      <Header />
     <Main />
      <Footer />
    </>
   </Router>
  );
}

export default App;