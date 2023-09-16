import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar">
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
        </ul>
    </div>
  );
};

export default Navbar;