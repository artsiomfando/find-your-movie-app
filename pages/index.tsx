import React from 'react';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';

// import SearchBar from '../components/SearchBar';
import store from '../redux/store';

export default function HomePage() {
  return (
  <Provider store={store}>
    
    <Footer />
  </Provider>
  )
};
