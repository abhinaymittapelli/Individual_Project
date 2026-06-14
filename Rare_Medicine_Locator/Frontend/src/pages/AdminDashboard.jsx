import Navbar from "../components/Navbar";

function AdminDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (user.role !== "admin") {
    return (
      <div className="p-20 text-center text-red-600 text-3xl">
        Unauthorized
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 p-8">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Admin Dashboard
          </h1>

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>
                  <th className="p-4">
                    Module
                  </th>

                  <th className="p-4">
                    Status
                  </th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td className="p-4">
                    Users
                  </td>

                  <td className="p-4 text-green-600">
                    Active
                  </td>
                </tr>

                <tr>
                  <td className="p-4">
                    Pharmacies
                  </td>

                  <td className="p-4 text-green-600">
                    Active
                  </td>
                </tr>

                <tr>
                  <td className="p-4">
                    Medicines
                  </td>

                  <td className="p-4 text-green-600">
                    Active
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;