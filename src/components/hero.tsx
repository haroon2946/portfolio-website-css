import Image from "next/image";
import "../style/hero.css";
function Hero(){
    return(
        <div className="header-container">
            {/* left */}
            <div className="header-boxes-contaner">
            <Image
           alt="hero"
            width={200}
            height={200}
            className="header-image"
            src={require('../../public/picture/picture..png')}
            />

            </div>
            {/* right */}
            <div>
                <div className="hero-right-dev">
                    <h1 className="title-hard">I am Haroon Afridi frontend developer
                        
                    </h1>
                    
                    <p className="des-Header">A frontend developer specializes in building the visual and interactive elements of a website or web application that users interact with directly.
                         They use technologies like HTML, CSS, and JavaScript 
                         </p>
                         <button>Hire Me</button>

                </div>
            </div>
        </div>
    )
}

export default Hero;