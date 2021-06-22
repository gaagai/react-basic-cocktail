import React from 'react';
import Layout from './layout/Layout';
import Search from './components/search/Search';
import Random from './components/random/Random';
import './App.css';

const App = () => {
  return (
    <Layout>
      <div className='main'>
        <div className='seach-cointainer'>
          <Search />
        </div>
        <Random />
      </div>
    </Layout>
  );
};

export default App;
