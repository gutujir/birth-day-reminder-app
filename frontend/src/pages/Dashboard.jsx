import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getStatistics, getUpcomingBirthdays } from "../api/birthdays";
import Header from "../components/Header";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ total: 0, thisMonth: 0 });
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, upcomingRes] = await Promise.all([
          getStatistics(),
          getUpcomingBirthdays(),
        ]);
        setStats(statsRes.data.data);
        setUpcoming(upcomingRes.data.data || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatBirthday = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Welcome back, {user?.first_name}! 👋
          </h1>
          <p className="text-slate-600">
            Here's your birthday management overview
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Total Birthdays
                </p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {loading ? "..." : stats.total}
                </p>
              </div>
              <div className="text-4xl">🎂</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">This Month</p>
                <p className="text-3xl font-bold text-indigo-600 mt-2">
                  {loading ? "..." : stats.thisMonth}
                </p>
              </div>
              <div className="text-4xl">📅</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Account Status
                </p>
                <p className="text-lg font-semibold text-green-600 mt-2">
                  {user?.isVerified ? "✓ Verified" : "Not Verified"}
                </p>
              </div>
              <div className="text-4xl">✉️</div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Upcoming */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                to="/birthdays"
                className="block p-4 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-lg border border-indigo-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Manage Birthdays
                    </h3>
                    <p className="text-sm text-slate-600">
                      Add, view, or delete birthdays
                    </p>
                  </div>
                  <span className="text-2xl">🎈</span>
                </div>
              </Link>

              <Link
                to="/profile"
                className="block p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      View Profile
                    </h3>
                    <p className="text-sm text-slate-600">
                      Update your account settings
                    </p>
                  </div>
                  <span className="text-2xl">👤</span>
                </div>
              </Link>

              {!user?.isVerified && (
                <Link
                  to="/verify"
                  className="block p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Verify Email
                      </h3>
                      <p className="text-sm text-slate-600">
                        Complete your account setup
                      </p>
                    </div>
                    <span className="text-2xl">✉️</span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Upcoming Birthdays */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Upcoming Birthdays
            </h2>
            {loading ? (
              <p className="text-slate-500 text-center py-8">Loading...</p>
            ) : upcoming.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-slate-500 mb-4">No upcoming birthdays</p>
                <Link
                  to="/birthdays"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Add your first birthday →
                </Link>
              </div>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {upcoming.map((person) => (
                  <div
                    key={person._id}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {person.name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">
                          {person.name}
                        </p>
                        <p className="text-sm text-slate-500">{person.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-indigo-600">
                        {formatBirthday(person.dateOfBirth)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
