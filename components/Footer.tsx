import "./Footer.css"
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok} from "react-icons/fa";
export default function AfficherFooter(){

    return(

        <footer className="containerfooter">

                <div id="containergeneral1">
                    
                   <div id="infogenerale">
                        <p>© 2026 Elite Store - Tous droits réservés</p>

                        <p>📍 Montréal, Québec, Canada</p>

                        <p>📞 +1 (514) 000-0000</p>

                        <p>✉️ contact@elitestore.com</p>
                    </div>
                
                    <div id="liensrapides">
                        <p>Liens rapides.</p>
                        <ul>
                            <li>Accueil</li>
                            <li>Produits</li>
                            <li>Actualités</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                </div>
                
                <div id="containerreseauxsociaux">
                    <p>Suivez-nous sur les réseaux sociaux</p>
                    <ul>
                        <li aria-label="Facebook"><FaFacebook/></li>
                        <li aria-label="Instagram"><FaInstagram/></li>
                        <li aria-label="Youtube"><FaYoutube/></li>
                        <li aria-label="Twitter"><FaTwitter/></li>
                        <li aria-label="Tiktok"><FaTiktok/></li>
                    </ul>
                </div>  

        </footer>

    );


}