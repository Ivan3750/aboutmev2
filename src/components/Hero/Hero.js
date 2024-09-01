import "./Hero.css"
import starIcon from "../../assets/icons/star.png";

const Hero = () =>{
    return (
        <div className="hero">
            <h1 className="hero__title">Ivan Kohan</h1>
            <div className="hero__about__block">
            <img src={starIcon} alt="Star icon" className="hero__star"/>
            <p className="hero__about">Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Hero