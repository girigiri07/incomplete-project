import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store/reducers/UserReducer";


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //  antha provider kula namba file la podanum aprm antha provider data ku namba step -2 la store la
  // ella slice yum store pani erupom atha kudanum 
  // enga tha global la namba store panna slice ah easy ah use panna mudiyum

//  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>

    // </Provider>
  , 
)







// const root =ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// )
// root.render(
//     <Provider store={store} >
//        <React.StrictMode>
//      <App />
//    </React.StrictMode> <App />
//     </Provider>
// )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
