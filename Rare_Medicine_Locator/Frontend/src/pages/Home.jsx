import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-medium">
                Healthcare Technology
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mt-6 leading-tight">
                Find Rare Medicines <br />
                <span className="text-emerald-600">
                  Faster & Easier
                </span>
              </h1>

              <p className="text-slate-600 text-lg mt-6 leading-8">
                Search rare medicines from verified pharmacies across your city.
                Get instant access to availability, pharmacy details and location.
              </p>

              <div className="flex gap-4 mt-8">

                <Link
                  to="/search"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
                >
                  🔍 Search Medicine
                </Link>

                <Link
                  to="/register"
                  className="border-2 border-slate-400 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Get Started
                </Link>

              </div>

            </div>


            {/* Right Image */}
            <div>

              <img
  src="https://images.pexels.com/photos/8460048/pexels-photo-8460048.jpeg"
  alt="Healthcare"
  className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
/>

            </div>

          </div>

        </section>


        {/* Why Choose Section */}

        <section className="max-w-7xl mx-auto px-6 py-12">

          <h2 className="text-4xl font-bold text-center text-slate-800">
            Why Choose RareMed?
          </h2>

          <p className="text-center text-slate-500 mt-3">
            Making medicine searching simpler, faster and reliable.
          </p>


          <div className="grid md:grid-cols-3 gap-8 mt-12">


            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">

              <div className="text-5xl">
                🔍
              </div>

              <h3 className="text-2xl font-bold mt-5">
                Smart Search
              </h3>

              <p className="text-slate-600 mt-3">
                Search medicines by name, brand, generic name and category.
              </p>

            </div>


            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">

              <div className="text-5xl">
                🏥
              </div>

              <h3 className="text-2xl font-bold mt-5">
                Verified Pharmacies
              </h3>

              <p className="text-slate-600 mt-3">
                Connect with registered pharmacies and check medicine availability.
              </p>

            </div>


            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">

              <div className="text-5xl">
                📍
              </div>

              <h3 className="text-2xl font-bold mt-5">
                Location Support
              </h3>

              <p className="text-slate-600 mt-3">
                Find pharmacies near you and navigate using Google Maps.
              </p>

            </div>

          </div>

        </section>


        {/* Statistics */}

        <section className="bg-emerald-600 mt-16">

          <div className="max-w-7xl mx-auto px-6 py-14">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">


              <div>
                <h2 className="text-5xl font-bold">
                  1000+
                </h2>

                <p className="mt-2 text-lg">
                  Medicines
                </p>
              </div>


              <div>
                <h2 className="text-5xl font-bold">
                  500+
                </h2>

                <p className="mt-2 text-lg">
                  Users
                </p>
              </div>


              <div>
                <h2 className="text-5xl font-bold">
                  100+
                </h2>

                <p className="mt-2 text-lg">
                  Pharmacies
                </p>
              </div>


              <div>
                <h2 className="text-5xl font-bold">
                  24/7
                </h2>

                <p className="mt-2 text-lg">
                  Availability
                </p>
              </div>


            </div>

          </div>

        </section>


      </div>
    </>
  );
}

export default Home;