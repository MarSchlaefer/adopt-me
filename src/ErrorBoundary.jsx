import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFrmoError() {
    return { hasError: true }
  };

  componentDidCatch(error, info) {
    // would want to insert something like Sentry/TrackJS/NewRelic here
    console.error("Error component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here to go to homepage.</Link>
        </h2>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;