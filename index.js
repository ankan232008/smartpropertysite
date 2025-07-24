'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [userType, setUserType] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <img src="/logo.png" alt="Company Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Smart Property Solutions</h1>
        <p className="text-gray-700 max-w-xl">
          A one-stop platform for land selling, dolil planning, legal documentation, and property management.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        <div className="space-y-4">
          <button onClick={() => setUserType('customer')} className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Customer Login</button>
          <button onClick={() => setUserType('host')} className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">Host Login</button>
          <button onClick={() => setUserType('admin')} className="w-full bg-gray-800 text-white py-2 rounded-xl hover:bg-gray-900">Admin Login</button>
        </div>

        {userType && (
          <form className="mt-6 space-y-4">
            <input type="tel" placeholder="Enter your mobile number" className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            <Link href={`/${userType}/dashboard`}>
              <button type="button" className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
                Continue as {userType.charAt(0).toUpperCase() + userType.slice(1)}
              </button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}