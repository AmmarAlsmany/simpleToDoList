import { APP_CONFIG } from '@shared/constants';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="card max-w-md w-full text-center bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {APP_CONFIG.NAME}
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to your task management app
          </p>
        </div>

        <div className="mb-6">
          <div className="text-6xl mb-4 animate-scale-in">👋</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Hello World!
          </h2>
          <p className="text-gray-600">
            Your project foundation is ready. Time to build something amazing!
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Next Steps:</h3>
          <ul className="text-sm text-gray-600 text-left space-y-1 list-none">
            <li>✅ React + TypeScript + Vite configured</li>
            <li>✅ Tailwind CSS with design tokens</li>
            <li>✅ ESLint + Prettier + Testing setup</li>
            <li>✅ Future dependencies installed</li>
            <li>🚀 Ready for development!</li>
          </ul>
        </div>

        <div className="text-sm text-gray-400">
          Version {APP_CONFIG.VERSION} • Built with ❤️
        </div>
      </div>
    </div>
  );
}

export default App;
