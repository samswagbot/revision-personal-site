import { Router } from 'react-router-dom';

import history from './global/services/history';
import Routes from './global/routes/index';
export default function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
