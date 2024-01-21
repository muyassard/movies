import { createRoot } from 'react-dom/client';

import Main from 'main';

import 'assets/styles/tailwind.css';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
