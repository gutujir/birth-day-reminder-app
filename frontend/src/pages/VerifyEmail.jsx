import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { verifyEmail, resendVerification } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import AuthNav from "../components/AuthNav";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { setUser, refresh } = useAuth();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);
    try {
      const { data } = await verifyEmail({ verificationCode: code });
      setUser(data?.user || null);
      await refresh();
      setStatus({ type: "success", message: "Email verified" });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setStatus({ type: "error", message: "Enter your email to resend" });
      return;
    }
    setResending(true);
    setStatus({ type: "", message: "" });
    try {
      await resendVerification({ email });
      setStatus({ type: "success", message: "Verification email resent" });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AuthNav />
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h1 className="text-2xl font-bold text-slate-900">Verify email</h1>
          <p className="text-sm text-slate-600 mt-1">
            Enter the verification code we sent you.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Verification code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
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
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Need a new code? Enter email
              </label>
              <div className="mt-1 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resending}
                  className="rounded-lg bg-slate-100 text-slate-800 px-3 py-2 text-sm font-semibold hover:bg-slate-200 disabled:opacity-70"
                >
                  {resending ? "Resending..." : "Resend"}
                </button>
              </div>
            </div>
            <p>
              Back to{" "}
              <Link to="/login" className="text-indigo-600 font-semibold">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
