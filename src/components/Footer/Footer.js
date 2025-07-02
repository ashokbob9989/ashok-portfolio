import './Footer.css';
import socialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const Footer = () => {

    const handleLinkCliks=(e, item)=>{
        e.preventDefault();
        window.open(item.url ?? alert("I am not on this yet..."), "_blank");
    };

    return (
        <div className='footer' id='footer'>
            <div className='up-footer'>
                <p>Copyrights &copy; {new Date().getFullYear()}</p>
                <ul>
                    {socialMediaLinks.map((item, index)=>(
                        <li key={index} onClick={(e)=>handleLinkCliks(e, item)}>
                            {item.icon}
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className='down-footer'>Designed by Guguloth Ashok</div>
        </div>
    );
}
export default Footer;