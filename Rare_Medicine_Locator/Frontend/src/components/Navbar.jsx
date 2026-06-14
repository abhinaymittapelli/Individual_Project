import { Link, useNavigate } from "react-router-dom";
import { FaCapsules } from "react-icons/fa6";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="flex gap-2 items-center text-2xl font-bold text-emerald-700"
        >
          <FaCapsules />
          RareMed
        </Link>

        <div className="flex items-center gap-6">

          <Link to="/">Home</Link>

          <Link to="/search">
            Search
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          {user && (
            <>
              <span className="font-medium text-slate-600">
                {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;