import './WelcomeMessage.css';
import profilePic from '../../assets/ashok-img-prof.png';
import maskLayer from '../../assets/img-overlay.png';
import { useEffect, useState } from 'react';

const WelcomeMessage = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 5000;
        let startTime = Date.now();
        let frame;

        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const percentage = Math.min((elapsedTime / duration) * 100, 100);
            setProgress(percentage);

            if (percentage < 100) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);

    }, []);

    return (
        <div className='welcome-message'>
            <div>
                <h1>Welcome to my Portfolio</h1>
            </div>
            <div className='welcome-top'>
                <div className='timer'
                    style={{
                        width: `${progress}%`
                    }}
                >
                    Redirecting you to Portfolio Page...
                </div>
                <div className='profile-mask-container'>
                    <img src={profilePic} alt='profile-pic' className='base-image'
                    ></img>
                    <img src={maskLayer} alt='overlay' className='mask-image'>
                    </img>
                </div>
            </div>
            <div className='welcome-bottom'>
                Hey there! Thanks for stopping by.<br />
                I'm thrilled to have you here — feel free to explore my work, passion, and the journey that brought this portfolio to life.
            </div>
            <div className='footer'>
                <footer>
                    Copyright &copy; {new Date().getFullYear()} by Guguloth Ashok
                </footer>
            </div>
        </div>
    );
}
export default WelcomeMessage;