import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function AdminDashboard() {

  const [users, setUsers] = useState([]);

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPharmacies: 0,
    totalMedicines: 0
  });

  useEffect(() => {

    const fetchData = async () => {

      try {

        const usersRes = await api.get(
          "/admin/users"
        );

        const statsRes = await api.get(
          "/admin/stats"
        );

        setUsers(usersRes.data);

        setStats(statsRes.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchData();

  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 p-8">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Admin Dashboard
          </h1>

          {/* Stats Cards */}

          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-slate-500">
                Total Users
              </h3>

              <p className="text-4xl font-bold mt-3 text-emerald-600">
                {stats.totalUsers}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-slate-500">
                Total Pharmacies
              </h3>

              <p className="text-4xl font-bold mt-3 text-blue-600">
                {stats.totalPharmacies}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-slate-500">
                Total Medicines
              </h3>

              <p className="text-4xl font-bold mt-3 text-orange-500">
                {stats.totalMedicines}
              </p>
            </div>

          </div>

          {/* Users Table */}

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold">
                Registered Users
              </h2>

            </div>

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>
                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    Role
                  </th>
                </tr>

              </thead>

              <tbody>

                {users.map((user) => (

                  <tr
                    key={user._id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4">
                      {user.name}
                    </td>

                    <td className="p-4">
                      {user.email}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          user.role === "admin"
                            ? "bg-red-100 text-red-600"
                            : user.role === "pharmacy"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        {user.role}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;