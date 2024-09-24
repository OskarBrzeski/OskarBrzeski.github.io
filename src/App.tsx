import {Route, Routes} from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage';
import NCNews from './pages/NCNews';

function App() {
    return <>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/ncnews" element={<NCNews />} />
            </Routes>
        </main>
    </>
}

export default App
