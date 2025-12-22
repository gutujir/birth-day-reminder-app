import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link
              to="/dashboard"
              className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              🎂 Birthday Reminder
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                to="/dashboard"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/birthdays"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Birthdays
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-slate-900">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/profile"
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                title="Profile"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.first_name?.[0]}
                  {user.last_name?.[0]}
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-slate-200 px-4 py-2 flex gap-4">
        <Link
          to="/dashboard"
          className="flex-1 text-center py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
        >
          Dashboard
        </Link>
        <Link
          to="/birthdays"
          className="flex-1 text-center py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
        >
          Birthdays
        </Link>
      </div>
    </header>
  );
};

export default Header;
