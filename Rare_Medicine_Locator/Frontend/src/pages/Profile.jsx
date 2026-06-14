import Navbar from "../components/Navbar";

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-3xl mx-auto">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="text-center mb-8">

              <div className="w-28 h-28 bg-emerald-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold">

                {user.name.charAt(0)}

              </div>

              <h1 className="text-4xl font-bold mt-4">
                {user.name}
              </h1>

              <p className="text-slate-500">
                {user.role.toUpperCase()}
              </p>

            </div>

            <div className="space-y-4">

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold">
                  Email
                </h3>

                <p>{user.email}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold">
                  Role
                </h3>

                <p>{user.role}</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;