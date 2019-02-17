import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Card from './Card';
import 'tachyons';
import { robot } from './robot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
<Card id={robot[0].id} name={robot[0].Name} Occupation={robot[0].Occupation}  />
<Card id={robot[1].id} name={robot[1].Name} Occupation={robot[1].Occupation} />
<Card id={robot[2].id} name={robot[2].Name} Occupation={robot[2].Occupation} />
<Card id={robot[3].id} name={robot[3].Name} Occupation={robot[3].Occupation} />
</div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
