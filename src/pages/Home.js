import React from 'react';
import Logo from '../components/Logo';


const Home = () => {
    return (
        <>
            <Logo />
            <div className="home">
                <h1> Ici vos besoins sont nos missions </h1>
                <br />
                <h3>Trouvez le prestataire idéal pour tous vos services du quotidien</h3>
            </div>
            {/* <div className='services'>
                <img src="./imgt/traiteur.jpg" alt="" />
                <img src="./imgt/lingere.jpg" alt="" />
                <img src="./imgt/courtier.jpg" alt="" />
                <img src="./imgt/service.jpg " alt="" />
                <img src="./imgt/voix off.jpg" alt="" />
                <img src="./imgt/travaux public.jpg" alt="" />
                <img src="./imgt/immobilier.jpg" alt="" />
                <img src="./imgt/eleve3.jpg" alt="" />
                <img src="./imgt/alimentation.jpg" alt="" />
                <img src="./imgt/prestation.jpg" alt="" />
                <img src="./imgt/vulgarisateur.jpg" alt="" />
                <img src="./imgt/location.jpg" alt="" />

            </div> */}
            <div className="services">
                <div className="card profile">
                    <h2>TRAITEUR</h2>
                </div>
                <div className="card profile1">
                    <h2>LINGERE</h2>
                </div>
                <div className="card profile2">
                    <h2>COURTIER</h2>
                </div>
                <div className="card profile3">
                    <h2>SERVICE</h2>
                </div>
                <div className="card profile4">
                    <h2>VOIX OFF</h2>
                </div>
                <div className="card profile5">
                    <h2>TRAVEAUX</h2>
                </div>
                <div className="card profile6">
                    <h2>IMMOBILIER</h2>
                </div>
                <div className="card profile7">
                    <h2>ETUDE</h2>
                </div>
                <div className="card profile8">
                    <h2>ALIMENTATION</h2>
                </div>
                <div className="card profile9">
                    <h2>PRESTATION</h2>
                </div>
                <div className="card profile10">
                    <h2>VULGARISATEUR</h2>
                </div>
                <div className="card profile11">
                    <h2>LOCATION</h2>
                </div>
            </div>






        </>
    );
};

export default Home;

