import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function YieldCalculator() {
  const [plants, setPlants] = useState(1);
  const [sqFt, setSqFt] = useState(4);
  const [experience, setExperience] = useState('beginner');

  const calculateYield = () => {
    const yields = {
      beginner: 0.5,
      intermediate: 0.75,
      expert: 1.0
    };
    
    const yieldPerPlant = yields[experience as keyof typeof yields];
    return (plants * yieldPerPlant).toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-semibold">Yield Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Plants</label>
          <input
            type="number"
            min="1"
            value={plants}
            onChange={(e) => setPlants(Math.max(1, parseInt(e.target.value)))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Growing Space (sq ft)</label>
          <input
            type="number"
            min="1"
            value={sqFt}
            onChange={(e) => setSqFt(Math.max(1, parseInt(e.target.value)))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Experience Level</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-lg font-medium text-green-800">
            Estimated Yield: <span className="font-bold">{calculateYield()} pounds per harvest</span>
          </p>
        </div>
      </div>
    </div>
  );
}