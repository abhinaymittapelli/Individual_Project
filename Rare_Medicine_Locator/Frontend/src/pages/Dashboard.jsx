import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 p-8">

        <div className="max-w-7xl mx-auto">

          <div className="bg-white p-8 rounded-3xl shadow mb-8">

            <h1 className="text-4xl font-bold">
              Welcome, {user.name}
            </h1>

            <p className="text-slate-500 mt-2">
              Manage medicine searches and pharmacy information.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-slate-500">
                Medicines
              </h2>

              <p className="text-4xl font-bold mt-3">
                💊
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-slate-500">
                Pharmacies
              </h2>

              <p className="text-4xl font-bold mt-3">
                🏥
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h2 className="text-slate-500">
                Verification
              </h2>

              <p className="text-4xl font-bold mt-3">
                ✔️
              </p>
            </div>

          </div>

          <Link
            to="/search"
            className="inline-block mt-8 bg-emerald-600 text-white px-8 py-4 rounded-xl"
          >
            Search Medicines
          </Link>

        </div>

      </div>
    </>
  );
}

export default Dashboard;