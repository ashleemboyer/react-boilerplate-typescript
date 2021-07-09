import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  isError: boolean;
}

export default class DefaultErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return <div>Error!</div>;
    }

    return children;
  }
}
