import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGoBack = () => {
    // Navigate to role-specific dashboard
    if (user?.role === 'ADMIN') {
      navigate('/admin');
    } else if (user?.role === 'HEALTH_PROVIDER') {
      navigate('/docter-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="text-center space-y-6 p-8">
        <span className="material-symbols-outlined text-red-500 dark:text-red-400 text-8xl">
          block
        </span>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Access Denied
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md">
          You do not have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
