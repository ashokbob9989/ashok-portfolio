import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className='navbar-lists'>
                <ul>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#connect'>Connect</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;