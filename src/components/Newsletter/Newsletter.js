import './Newsletter.css';
import socialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const Newsletter = () => {

    const handleLinkClicks=(e, item)=>{
        e.preventDefault();
        // console.log(item.url);
        window.open(item.url ?? alert("I am not on this yet..."), "_blank");
    };

    return (
        <div className='newsletter' id='connect'>
            <ul>
                {socialMediaLinks.map((item, index)=>(
                    <li key={index} onClick={(e)=>handleLinkClicks(e, item)}>
                        {item.icon}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Newsletter;