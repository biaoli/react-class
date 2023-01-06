import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Feed from './components/Feed.jsx';
import VedioDetail from './components/VedioDetail.jsx';
import ChannelDetail from './components/ChannelDetail.jsx';
import SearchFeed from './components/SearchFeed.jsx';

const App = () => {
  return (
    <div>
      < Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ < Feed /> } />
          <Route path='/vedio/:id' element={ <VedioDetail /> } />
          <Route path='/channel/:id' element={ <ChannelDetail /> } />
          <Route path='/search/:searchTerm' element={ <SearchFeed /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
