import React, { useState } from 'react';
import { Search, Droplets, Shield, BadgeCheck, ArrowRight, Database, BarChart, ClipboardCheck } from 'lucide-react';

function App() {
  const [address, setAddress] = useState('33 Quays Drive Byron Bay');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 pt-8">
        {/* Header */}
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <Droplets className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-blue-900">FloodSmart.AI</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Contact Us
          </button>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            AI-Powered Flood Risk Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Make informed property decisions with advanced flood risk intelligence
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                className="w-full p-4 border rounded-lg pl-12 pr-4 text-lg"
                placeholder="Enter property address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Search className="absolute left-4 top-4 text-gray-400" size={24} />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg w-full hover:bg-blue-700 transition-colors"
            >
              Get Instant Risk Assessment
            </button>
          </form>

          {showSuccess && (
            <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                Thank you! We'll prepare your report and contact you shortly.
              </p>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Shield className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Analysis</h3>
            <p className="text-gray-600">
              Advanced AI analysis of historical data, climate projections, and local flood patterns
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <BadgeCheck className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Expert Verified</h3>
            <p className="text-gray-600">
              Reports reviewed by flood assessment experts for accuracy and reliability
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <ArrowRight className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
            <p className="text-gray-600">
              Clear recommendations for flood mitigation and property protection
            </p>
          </div>
        </div>

        {/* Data Sources Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Trusted Data Sources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Database className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">NSW Government</h3>
              <p className="text-gray-600">Official flood data and planning information</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BarChart className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">CoreLogic</h3>
              <p className="text-gray-600">Property data and risk analytics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ClipboardCheck className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Local Council Records</h3>
              <p className="text-gray-600">Historical flood data and local insights</p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">1</div>
              <p>Enter property address</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">2</div>
              <p>AI analyzes flood data</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">3</div>
              <p>Expert verification</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">4</div>
              <p>Receive detailed report</p>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Trusted By Property Professionals</h2>
          <div className="flex justify-center items-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-12 w-48 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                Scout Home Inspections
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-12 w-48 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                Partner Logo
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-600">Integrated with leading property inspection services</p>
        </div>
      </div>
    </div>
  );
}

export default App;