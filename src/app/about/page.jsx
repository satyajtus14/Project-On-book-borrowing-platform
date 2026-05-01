import React from 'react';

const AboutPage = () => {
    return (
     <div className="min-h-screen bg-gray-300 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About BookNest
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-center mb-6">
          BookNest is an online book borrowing platform that makes reading easy,
          affordable, and accessible for everyone.
        </p>

        {/* Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              📚 Our Mission
            </h2>
            <p className="text-gray-600">
              To connect readers with books and promote a love for reading by
              making books available anytime, anywhere.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              🌍 What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Borrow books online easily</li>
              <li>Wide range of categories</li>
              <li>Simple and user-friendly interface</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              💡 Why Choose Us?
            </h2>
            <p className="text-gray-600">
              BookNest helps you save money, discover new books, and enjoy
              reading without limits.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BookNest. All rights reserved.
        </div>
      </div>
    </div>
    );
};

export default AboutPage;
