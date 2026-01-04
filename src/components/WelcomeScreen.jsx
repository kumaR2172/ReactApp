import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const WelcomeScreen = ({ onStart, loading, error }) => (
  <div className="max-w-2xl mx-auto text-center">
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-blue-600" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Welcome to the Online Exam
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        Test your knowledge with our comprehensive quiz system. Read each question carefully and select your answers.
      </p>
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 flex items-center justify-center gap-2">
            <AlertCircle size={20} />
            {error}
          </p>
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
        <h3 className="font-semibold text-gray-900 mb-3">Instructions:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• You will have 30 minutes to complete the exam</li>
          <li>• Each question has only one correct answer</li>
          <li>• You can navigate between questions freely</li>
          <li>• Review your answers before submitting</li>
        </ul>
      </div>

      <button
        onClick={onStart}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        {loading ? 'Loading...' : 'Start Exam'}
      </button>
    </div>
  </div>
);