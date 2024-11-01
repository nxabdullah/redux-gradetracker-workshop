import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <Link to="/">
          <h1 className="btn btn-ghost normal-case text-3xl">semtrack</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
