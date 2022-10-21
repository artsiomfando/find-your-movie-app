import React, { Component, ReactNode, ComponentType } from 'react';

interface Props {
  children?: ReactNode;
  ErrorComponent: ComponentType<{ errorMessage: string }>;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;

    if (error) {
      const { message } = error as Error;
      const { ErrorComponent } = this.props;

      return <ErrorComponent errorMessage={message} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
