import './Hero.css';
import heroImage from '../../assets/ashok-img-prof.png';

const Hero = () => {
    return (
        <div className="hero">
            <h1>Welcome to My Portfolio </h1>
            <div className='hero-section'>
                <div className='hero-left'>
                    <img src={heroImage} alt='hero section'>
                    </img>
                </div>
                <div className='hero-right'>
                    <p>
                        Hello and thank you for visiting my digital space! I'm thrilled to share my journey with you — one that's been shaped by curiosity, consistent learning, and a deep passion for technology.
                    </p>

                    <p>
                        With a strong academic foundation in Computer Science, I’ve equipped myself with both theoretical depth and practical knowledge. Along the way, I've honed my skills in full-stack development, data structures & algorithms, and modern technologies like React, Java, Spring Boot, Angular, MERN, Databases, etc...
                    </p>

                    <p>
                        My portfolio showcases a collection of meaningful projects — from innovative web applications to collaborative team builds — each reflecting my commitment to solving real-world problems through clean, efficient code.
                    </p>

                    <p>
                        Beyond academics, my professional experience has been both rewarding and transformative. I had the incredible opportunity to work as an Intern at Bank of New York, where I gained valuable insights into enterprise systems, team dynamics, and industry practices.
                    </p>

                    <p>
                        I’m excited to share that I’ll be officially joining BNY this August as a full-time member — a milestone in my journey that reflects years of effort, growth, and exploration.
                    </p>

                    <p>
                        Feel free to explore my portfolio to learn more about my work, skills, and the story that brought me here. Whether you're a recruiter, collaborator, or fellow enthusiast — I'm glad you're here!
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Hero;