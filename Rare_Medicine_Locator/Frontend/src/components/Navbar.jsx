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
          className="flex items-center gap-2 text-2xl font-bold text-emerald-700"
        >
          <FaCapsules />
          RareMed
        </Link>

        <div className="flex items-center gap-6">

          <Link to="/">
            Home
          </Link>

          {!user && (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}

          {user?.role === "user" && (
            <>
              <Link to="/search">
                Search Medicine
              </Link>

              <Link to="/pharmacies">
                Pharmacies
              </Link>

            </>
          )}

          {user?.role === "pharmacy" && (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/pharmacies">
                Pharmacies
              </Link>

              <Link to="/add-medicine">
                Add Medicine
              </Link>

              <Link to="/manage-medicines">
                Manage Medicines
              </Link>

              <Link to="/add-pharmacy">
              Add Pharmacy
           </Link>

              <Link to="/manage-pharmacies">
            Manage Pharmacies
             </Link>

            </>
          )}

          {user?.role === "admin" && (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/admin">
                Admin
              </Link>

              <Link to="/pharmacies">
                Pharmacies
              </Link>
            </>
          )}

          {user && (
  <>
    <Link to="/profile">
      Profile
    </Link>

    <span className="text-slate-600 font-medium">
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