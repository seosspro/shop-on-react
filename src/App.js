import { React } from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <Routes>
                    <Route path='/*' element={<Home />} />
                    <Route path='/Cart/*' element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
