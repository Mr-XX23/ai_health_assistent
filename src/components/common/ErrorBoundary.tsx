import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * Logs errors and displays a fallback UI instead of crashing the entire app
 * 
 * Usage:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Update state with error info
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, send error to logging service
    if (import.meta.env.PROD) {
      // TODO: Send to error tracking service (e.g., Sentry, LogRocket)
      // Example: Sentry.captureException(error);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI provided by parent
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4">
          <div className="max-w-md w-full bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-8 shadow-lg">
            <div className="flex flex-col items-center text-center gap-4">
              {/* Error Icon */}
              <div className="rounded-full bg-error/10 p-4">
                <span className="material-symbols-outlined text-5xl text-error">
                  error
                </span>
              </div>

              {/* Error Title */}
              <h1 className="text-2xl font-bold">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                We're sorry for the inconvenience. An unexpected error has occurred.
              </p>

              {/* Error Details (Development Only) */}
              {import.meta.env.DEV && this.state.error && (
                <details className="w-full mt-4 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-error hover:text-error/80">
                    Show Error Details
                  </summary>
                  <div className="mt-2 p-4 bg-background-light dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark overflow-auto">
                    <p className="text-xs font-mono text-error break-all">
                      {this.state.error.toString()}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="mt-2 text-xs font-mono text-text-secondary-light dark:text-text-secondary-dark overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={this.handleReset}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-4 py-2 border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  Go Home
                </button>
              </div>

              {/* Support Information */}
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-4">
                If this problem persists, please contact support.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
