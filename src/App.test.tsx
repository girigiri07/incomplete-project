import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  
  render(<App />);
   const linkElement = screen.getByText(/learn react/i);
   expect(linkElement).toBeInTheDocument(); 
  
});





 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   //  antha provider kula namba file la podanum aprm antha provider data ku namba step -2 la store la
//   // ella slice yum store pani erupom atha kudanum 
//   // enga tha global la namba store panna slice ah easy ah use panna mudiyum
//  <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//  </Provider>,