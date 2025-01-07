import * as React from 'react';
import './App.css';

import Button from '@mui/material/Button';
function App() {
  const handleButtonClick = () => {
    window.open("https://uabooks.net/reader/155/", "_self");
  };
  return (
    <div classNameName="App">
  
    <div className="center">
        <div className="anime-name-box">
          
        <img width="250px" src="https://static.yakaboo.ua/media/catalog/product/1/4/14_1_50.jpg" alt=""/>
            <div>
                <h1 className="anime-name">
                  Looking for Alaska
                </h1>
                <h2>
                    Видавництво: <i>HarperCollins Publishers</i>
                </h2>
                <h2>
                    Ріки видавництва : <i>2011,2013,2015,2017,2019</i>
                </h2>
                <h2>
                    Автор: <i>Джон Грін</i>
                </h2>
                <h2>
                    Опис: <i className="description">The unmissable first novel from bestselling and award-winning author of THE FAULT IN OUR STARS. "If people were rain, I was drizzle and she was a hurricane." Miles Halter's whole life has been one big non-event, until he meets Alaska Young. Gorgeous, clever and undoubtedly screwed-up, Alaska draws Miles into her reckless world and irrevocably steals his heart. For Miles, nothing can ever be the same again. Looking for Alaska brilliantly captures the exquisite painful joy of living and loving. Poignant, funny, heartbreaking and compelling, this novel will stay with you forever.</i>
                </h2>
                <Button variant='contained' onClick={handleButtonClick}>Читати книгу</Button>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
