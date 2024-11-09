import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { RiHtml5Fill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { MdCss } from "react-icons/md";


function Services(){
    return(
        <main className="main">
        <div className="ser-container">
            {/* top div */}
            <div className="top-div-ser">
                <h2 className="title-ser">My Services</h2>
                <p className="des-ser">My services range from developing user-friendly applications and websites to optimizing existing codebases for better performance. 
                    I prioritize clean, maintainable code 
                    </p>
            </div>
            {/* bottom div */}
            <div className="boxes-container">
                <div className="box">
                <FaLaptopCode className="ser-icon"/>
                <h3>Web Development</h3>
                <span>Blog E-commerce</span>
                </div>
                <div className="box">
                <DiReact className="ser-icon"/>
                <h3>React</h3>
                <span>One page website</span>
                </div>
                <div className="box">
                <RiHtml5Fill className="ser-icon"/>
                <h3>HTML</h3>
                <span>Language</span>
                </div>
                <div className="box">
                <TbBrandNextjs className="ser-icon"/>
                <h3>Next Js</h3>
                <span>SSR</span>
                </div>
                <div className="box">
                <MdCss className="ser-icon"/>
                <h3>CSS</h3>
                <span>Style Sheet</span>
                </div>
                <div className="box">
                <FaLaptopCode className="ser-icon"/>
                <h3>Web Development</h3>
                <span>Blog E-commerce</span>
                </div>
            </div>
            
        </div>
        </main>
    )
}

export default Services;