import App from './App';
import Context from './components/Context'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

//we have to access user object first
root.render(
  <Context>

    <App />

  </Context>);
