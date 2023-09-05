import './main.css';
import App from './App.jsx'
import ReactDOM from 'react-dom/client';


const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);

//RENDER TOUS LES COMPOSANTS
root.render(
  <>
    <App />
  </>
);
