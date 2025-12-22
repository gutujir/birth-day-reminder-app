import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return null;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold shadow-lg">
                {user.first_name?.[0]}
                {user.last_name?.[0]}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {user.first_name} {user.last_name}
                </h1>
                <p className="text-indigo-100 mt-1">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500">
                  First Name
                </label>
                <p className="text-lg font-medium text-slate-900">
                  {user.first_name}
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500">
                  Last Name
                </label>
                <p className="text-lg font-medium text-slate-900">
                  {user.last_name}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-500">
                Email Address
              </label>
              <p className="text-lg font-medium text-slate-900">{user.email}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-500">
                Account Status
              </label>
              <div className="flex items-center gap-2">
                {user.isVerified ? (
                  <>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      ✓ Verified
                    </span>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      ⚠ Not Verified
                    </span>
                    <Link
                      to="/verify"
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Verify now
                    </Link>
                  </>
                )}
              </div>
            </div>

            {user.lastLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500">
                  Last Login
                </label>
                <p className="text-lg font-medium text-slate-900">
                  {formatDate(user.lastLogin)}
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-slate-200">
              <Link
                to="/reset"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Change Password →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/dashboard"
            className="text-slate-600 hover:text-slate-900 font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
