import React from 'react';
import Log from '../components/Log';

const Agence = () => {
    return (
     <div className="agence-page">
         <div className="log-container">
            <Log />
            <div className="img-container"> 
                <img src="./img/logo complet.png" alt="Logo-VBS" />
            </div>
         </div>
     </div>
    );
};

export default Agence;