import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            🎂 Birthday Reminder
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-slate-700 hover:text-indigo-600 font-medium transition-colors px-4 py-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNav;
