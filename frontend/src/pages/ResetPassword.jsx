import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/auth";
import AuthNav from "../components/AuthNav";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", code: "", newPassword: "" });
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
      await resetPassword(form);
      setStatus({
        type: "success",
        message: "Password reset. You can log in now.",
      });
      navigate("/login", { replace: true });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AuthNav />
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h1 className="text-2xl font-bold text-slate-900">Reset password</h1>
          <p className="text-sm text-slate-600 mt-1">
            Enter your email, the code you received, and a new password.
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
                Reset code
              </label>
              <input
                type="text"
                name="code"
                value={form.code}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                New password
              </label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
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
              {loading ? "Resetting..." : "Reset password"}
            </button>
          </form>
          <p className="text-sm text-slate-600 mt-4">
            Back to{" "}
            <Link to="/login" className="text-indigo-600 font-semibold">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
