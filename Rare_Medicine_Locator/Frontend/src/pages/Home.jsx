import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm">
                Healthcare Technology
              </span>

              <h1 className="text-6xl font-bold mt-6 leading-tight text-slate-800">
                Find Rare Medicines
                <span className="text-emerald-600"> Instantly</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Search pharmacies nearby and locate rare medicines in real-time.
                Helping patients access critical medicines quickly.
              </p>

              <div className="flex gap-4 mt-8">

                <Link
                  to="/search"
                  className="bg-emerald-600 px-8 py-4 rounded-xl text-white font-semibold"
                >
                  Search Medicine
                </Link>

                <Link
                  to="/register"
                  className="border px-8 py-4 rounded-xl font-semibold"
                >
                  Get Started
                </Link>

              </div>

            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
                alt=""
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;