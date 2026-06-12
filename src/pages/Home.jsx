import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          Welcome to BOSS v2 Dashboard
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Explore the capabilities of BOSS v2 with our test dashboard.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 rounded text-white shadow-lg hover:bg-blue-700">
          Get Started
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Feature One</h2>
          <p className="text-gray-400">
            Detailed description of feature one, highlighting its benefits and use cases.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Feature Two</h2>
          <p className="text-gray-400">
            Detailed description of feature two, focusing on its importance and implementation.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Feature Three</h2>
          <p className="text-gray-400">
            Overview of feature three and how it enhances the user experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;