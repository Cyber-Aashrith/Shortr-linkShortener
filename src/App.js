import React from 'react';
import './App.css';
import LinkRes from './LinkRes';
import LinkShortener from './LinkShortener';

function App() {

  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className='App'>
      <html lang='en'>
        <body>
        <div className='container'>
        <h1 className='tot'><span className='Wel'>Welcome To </span><br /><span className='Shortr'>Shortr.</span></h1>
        </div>

        <div className='container'>
        <h2 className='title'>Shorten Your Link🔗<br /> With Just A Click👆.</h2>
        </div>

        <LinkShortener setInputValue={setInputValue}/>

        <LinkRes inputValue={inputValue}/>

        </body>
      </html>
    </div>
  );
}

export default App;
