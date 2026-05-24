
import Image from "next/image";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok} from "react-icons/fa";

export default function AfficherHeader(){

    return(

        <header className="containerHeader">

                <div>
                    <div>
                         <Image src="/images/logo.png" alt="Logo de Elite Store" height={80} width={80} />
                         <h1>Elite Store</h1>
                    </div>
                    
                    <div id="containerreseauxsociaux">
                        <ul>
                            <li><FaFacebook/></li>
                            <li><FaInstagram/></li>
                            <li><FaYoutube/></li>
                            <li><FaTwitter/></li>
                            <li><FaTiktok/></li>
                        </ul>
                    </div>
                </div>

                <nav className="barmenu">
                    <ul>
                        <li>Accueil</li>
                        <li>Produits</li>
                        <li>Actualités</li>
                        <li>Contacts</li>
                        <li>Créer un compte</li>

                    </ul>
                </nav>
        </header>

    );

}