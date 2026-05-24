import Image from "next/image";

export default function AfficherHero(){

    return(

        <div className="containerhero">
            
            <div id="containerimage">
                <Image src="/images/hero4.png" alt="Images Hero de Elite Store" width={250} height={250}/>
                <Image src="/images/hero1.png" alt="Images Hero de Elite Store" width={250} height={250}/>
                <Image src="/images/hero5.png" alt="Images Hero de Elite Store" width={250} height={250}/>
                <Image src="/images/hero6.png" alt="Images Hero de Elite Store" width={250} height={250}/>
            </div>

            <div id="containerspeech">
                <h2>Elite Store</h2>
                <p>Soyez toujours chic</p>
                <button>Découvrir nos produits</button>
            </div>
           
         
        </div>

    );

}