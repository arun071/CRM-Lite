import React from 'react';
import LandingPageHeader from './LandingPageHeader';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <LandingPageHeader />


      {/* Features Section */}
      <section className="container h-1/2 mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose CRM Lite?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Lead Management</h3>
            <p className="text-gray-600">
              Capture, organize, and nurture leads effectively. Track every interaction and never miss an opportunity.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Sales Pipeline</h3>
            <p className="text-gray-600">
              Visualize your sales process with intuitive pipelines, monitor progress, and close deals faster.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Task Management</h3>
            <p className="text-gray-600">
              Assign, track, and manage tasks with ease. Stay organized and ensure timely completion of critical actions.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Reporting & Insights</h3>
            <p className="text-gray-600">
              Generate insightful reports to track performance, identify trends, and make data-driven decisions.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Contact Management</h3>
            <p className="text-gray-600">
              Store all contact details in one place, view interaction history, and build stronger relationships.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
            <p className="text-gray-600">
              Access CRM Lite on the go with our mobile-responsive design. Stay connected wherever you are.
            </p>
          </div>
        </div>
      </section>

     {/* Pricing  */}
     <section className='bg-blue-100'>
       <div className="bg-gray-100 min-h-screen py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Plan</h1>
            <p className="text-xl text-gray-600 mb-16">Our pricing is simple and flexible to suit your needs. No hidden fees, just transparent pricing.</p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white  shadow-lg rounded-lg p-8 text-center border border-gray-200">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Basic</h2>
                <p className="text-5xl font-extrabold text-gray-800 mb-4">$19</p>
                <p className="text-lg text-gray-600 mb-8">per month</p>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-600">✔️ 10 GB Storage</li>
                  <li className="text-gray-600">✔️ 1 User</li>
                  <li className="text-gray-600">✔️ Basic Support</li>
                </ul>
                <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pro</h2>
                <p className="text-5xl font-extrabold text-gray-800 mb-4">$49</p>
                <p className="text-lg text-gray-600 mb-8">per month</p>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-600">✔️ 50 GB Storage</li>
                  <li className="text-gray-600">✔️ 5 Users</li>
                  <li className="text-gray-600">✔️ Priority Support</li>
                </ul>
                <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Enterprise</h2>
                <p className="text-5xl font-extrabold text-gray-800 mb-4">$99</p>
                <p className="text-lg text-gray-600 mb-8">per month</p>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-600">✔️ 200 GB Storage</li>
                  <li className="text-gray-600">✔️ 20 Users</li>
                  <li className="text-gray-600">✔️ 24/7 Support</li>
                </ul>
                <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Call-to-Action Section */}
       <section className="bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-gray-700 mb-6">
            Join thousands of small businesses using CRM Lite to streamline their operations.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started Now
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CRM Lite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
