import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createBirthday,
  getBirthdays,
  deleteBirthday,
  getStatistics,
} from "../api/birthdays";
import Header from "../components/Header";

const Birthdays = () => {
  const [form, setForm] = useState({ name: "", email: "", dateOfBirth: "" });
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [stats, setStats] = useState({ total: 0, thisMonth: 0 });

  const today = new Date().toISOString().split("T")[0];

  const fetchBirthdays = async () => {
    try {
      setListLoading(true);
      const [birthdaysRes, statsRes] = await Promise.all([
        getBirthdays(),
        getStatistics(),
      ]);
      setItems(birthdaysRes.data.data || []);
      setStats(statsRes.data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    fetchBirthdays();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createBirthday(form);
      toast.success("🎉 Birthday saved! We'll send wishes at 7am.");
      setForm({ name: "", email: "", dateOfBirth: "" });
      fetchBirthdays();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Delete birthday for ${name}?`)) return;
    try {
      await deleteBirthday(id);
      toast.success("Birthday deleted successfully");
      fetchBirthdays();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Birthday Management
          </h1>
          <p className="text-slate-600 mt-2">
            Add and manage birthdays. We'll send automated wishes at 7 AM.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Total Birthdays
                </p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {stats.total}
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
                  {stats.thisMonth}
                </p>
              </div>
              <div className="text-4xl">📅</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Add Form */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Add New Birthday
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  max={today}
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 text-white py-2.5 text-sm font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-200 disabled:opacity-70"
              >
                {loading ? "Saving..." : "Save Birthday"}
              </button>
            </form>
          </div>

          {/* List */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">
                All Birthdays ({items.length})
              </h2>
              <button
                onClick={fetchBirthdays}
                disabled={listLoading}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 disabled:opacity-50"
              >
                {listLoading ? "Loading..." : "Refresh"}
              </button>
            </div>
            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-center text-slate-500 py-8">
                  No birthdays added yet
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-600">{item.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-medium text-indigo-600">
                        {new Date(item.dateOfBirth).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <button
                        onClick={() => handleDelete(item._id, item.name)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
