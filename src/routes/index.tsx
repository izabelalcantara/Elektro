import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Telaini from '../pages/TelaIni'; 
import Home from '../pages/Home'; 
import Cadastropag from '../pages/Cadastropag';
import Cadastroconti from '../pages/Cadastroconti';
import Parabenscad from '../pages/Parabenscad';
import Entrarpag from '../pages/Entrarpag';



const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/telaIni" element={<Telaini />} /> 
                <Route path="/cadastropag" element={<Cadastropag />} />
                <Route path="/cadastroconti" element={<Cadastroconti />} />
                <Route path="/parabenscad" element={<Parabenscad />} />
                <Route path="/entrarpag" element={<Entrarpag />} />
        
        
            </Routes>
        </Router>
    );
}

export default AppRoutes;
