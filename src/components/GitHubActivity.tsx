import { useState, useEffect } from 'react';

interface GitHubRepository {
  name: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

const GitHubActivity = () => {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = 'notjoedo'; // Your GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepositories(reposData);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Loading GitHub activity...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 dark:text-red-400">Error: {error}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          GitHub data temporarily unavailable
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
        <h3 className="text-lg font-semibold text-black dark:text-white text-center sm:text-left">
          Recent repositories
        </h3>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm text-center sm:text-right block sm:inline"
        >
          View profile →
        </a>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {repositories.slice(0, 5).map((repo) => (
          <div key={repo.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 space-y-3 sm:space-y-0">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Repository
                </span>
              </div>
              <div className="text-sm font-medium text-black dark:text-white break-words">
                {repo.full_name}
              </div>
              {repo.description && (
                <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 break-words">
                  {repo.description}
                </p>
              )}
            </div>
            
            <div className="flex flex-wrap items-center justify-start sm:justify-end gap-3 sm:gap-4 text-xs text-gray-500 dark:text-gray-300">
              {repo.language && (
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-black dark:text-white whitespace-nowrap">{repo.language}</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">⭐</span>
                <span className="text-black dark:text-white">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">🍴</span>
                <span className="text-black dark:text-white">{repo.forks_count}</span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-white hover:underline whitespace-nowrap px-2 py-1 rounded bg-blue-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubActivity;
