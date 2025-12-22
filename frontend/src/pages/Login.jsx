import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import AuthNav from "../components/AuthNav";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, refresh } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);
    try {
      await login(form);
      await refresh();
      setStatus({ type: "success", message: "Login successful" });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AuthNav />
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-sm text-slate-600 mt-1">
            Login to manage birthdays.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            {status.message && (
              <div
                className={`rounded-lg px-3 py-2 text-sm ${
                  status.type === "error"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-green-50 text-green-700 border border-green-200"
                }`}
              >
                {status.message}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 text-white py-2.5 text-sm font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-200 disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>
          <div className="text-sm text-slate-600 mt-4 space-y-1">
            <p>
              No account?{" "}
              <Link to="/signup" className="text-indigo-600 font-semibold">
                Sign up
              </Link>
            </p>
            <p>
              Forgot password?{" "}
              <Link to="/forgot" className="text-indigo-600 font-semibold">
                Reset here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
