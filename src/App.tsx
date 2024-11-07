import React from 'react';
import { Leaf, GraduationCap } from 'lucide-react';
import YieldCalculator from './components/YieldCalculator';
import PromoPopup from './components/PromoPopup';
import FAQ from './components/FAQ';

function App() {
  const CTAButton = () => (
    <a
      href="https://thcuniversity.org/ref/usmariano/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
    >
      <GraduationCap className="w-5 h-5" />
      <span>Learn from Expert Growers</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Cannabis Yield Calculator</h1>
            </div>
            <CTAButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estimate your cannabis yield based on your growing space and experience level. Our calculator helps you plan your grow operation effectively.
          </p>
        </div>

        <div className="mb-16">
          <YieldCalculator />
        </div>

        <div className="prose max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4">How to Use the Cannabis Yield Calculator</h2>
          <p>
            Our Cannabis Yield Calculator is designed to help you estimate potential harvest yields. Simply input your number of plants, growing space, and experience level to get an estimate.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Understanding the Results</h3>
          <p>
            The calculator takes into account your experience level to provide realistic estimates:
          </p>
          <ul className="list-disc pl-6">
            <li>Beginner growers typically yield around 0.5 pounds per plant</li>
            <li>Intermediate growers can expect around 0.75 pounds per plant</li>
            <li>Expert growers often achieve 1 pound or more per plant</li>
          </ul>
        </div>

        <FAQ />

        <div className="text-center mt-16 bg-green-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Maximize Your Growing Potential?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join THC University today and learn from industry experts like Jorge Cervantes. Transform your growing skills and increase your yields!
          </p>
          <CTAButton />
        </div>
      </main>

      <PromoPopup />
    </div>
  );
}

export default App;