import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Never Forget a
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Birthday
              </span>{" "}
              Again
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Automate birthday wishes and make every celebration special. We'll
              send personalized emails at 7 AM so you never miss an important
              day.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/signup"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl shadow-md hover:shadow-lg border-2 border-slate-200 hover:border-indigo-300 transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 relative">
            <div className="text-center text-8xl opacity-50 rotate-12 animate-pulse">
              🎂🎉🎈
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Why Choose Our App?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Automated Reminders
            </h3>
            <p className="text-slate-600">
              Receive birthday reminders at 7 AM sharp. Never miss another
              celebration with our automated email system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Personalized Emails
            </h3>
            <p className="text-slate-600">
              Send beautiful, personalized birthday wishes automatically to make
              everyone feel special on their day.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Easy Management
            </h3>
            <p className="text-slate-600">
              Simple dashboard to add, view, and manage all birthdays in one
              place. Track upcoming celebrations effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who never miss a birthday celebration.
          </p>
          <Link
            to="/signup"
            className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Create Free Account
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-600">
          <p className="text-sm">
            © 2025 Birthday Reminder. Built with ❤️ to celebrate every special
            moment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
