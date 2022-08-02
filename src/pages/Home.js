import React from 'react';
import Logo from '../components/Logo';
import 'bootstrap';

const Home = () => {
    return (
        <>
        <Logo />
        <div className="home">
            <h2>Bienvenue sur la premier plateforme de prestation de services du sénégal.</h2>
            <br />
            <h1> Ici vos besoins sont nos missions </h1>
            <br />
            <h3>Trouvez le prestataire idéal pour tous vos services du quotidien</h3>       
        </div>
        {/* <div className='services'>
           <img src="./img/signe.png"  alt="" /> 

        </div> */}


        

        </>
    );
};

export default Home;

