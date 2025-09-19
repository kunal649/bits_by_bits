import React from 'react';
import './index.css';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-kmrl-blue-600 via-kmrl-blue-700 to-kmrl-green-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Smart Document Processing
            <span className="block text-kmrl-green-300">for Kochi Metro</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatically process thousands of documents daily, route to right departments, never miss deadlines
          </p>
          <button className="btn-primary text-lg px-10 py-4 bg-white text-kmrl-blue-600 hover:bg-gray-50 hover:text-kmrl-blue-700">
            View Live Demo
          </button>
        </div>
      </div>
    </section>
  );
};

// Feature Cards Component
const FeatureCards = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-kmrl-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Integration",
      description: "Seamlessly connect with your existing email systems to automatically capture and process incoming documents from multiple sources."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-kmrl-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Analysis",
      description: "AI-powered document analysis that understands content, extracts key information, and intelligently categorizes documents for efficient processing."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-kmrl-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Department Dashboards",
      description: "Real-time dashboards for each department showing document status, processing metrics, and deadline tracking for complete visibility."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Government
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your document workflow with intelligent automation and comprehensive oversight
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:border-kmrl-blue-200">
              <div className="flex items-center justify-center w-16 h-16 bg-kmrl-blue-50 rounded-lg mb-6 group-hover:bg-kmrl-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Statistics Section Component
const StatisticsSection = () => {
  const stats = [
    {
      number: "70%",
      label: "Time Saved",
      description: "Reduction in manual processing time"
    },
    {
      number: "1000+",
      label: "Docs/Day",
      description: "Documents processed automatically"
    },
    {
      number: "Zero",
      label: "Missed Deadlines",
      description: "With intelligent deadline tracking"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600">
            Real metrics from government organizations using our system
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="text-4xl md:text-5xl font-bold text-kmrl-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-kmrl-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">KMRL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KMRL Document Intelligence</h3>
                <p className="text-gray-400">Kochi Metro Rail Limited</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering government organizations with intelligent document processing solutions for the digital age.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About System</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kochi Metro Rail Limited</li>
              <li>Kochi, Kerala, India</li>
              <li>Email: info@kmrl.co.in</li>
              <li>Phone: +91 484 123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kochi Metro Rail Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureCards />
      <StatisticsSection />
      <Footer />
    </div>
  );
}

export default App;
