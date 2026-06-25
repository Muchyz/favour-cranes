import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <div className="section-pad text-center max-w-lg mx-auto">
      <h1 className="text-6xl font-bold text-brandred mb-4">404</h1>
      <p className="text-slate mb-6">The page you're looking for doesn't exist or has moved.</p>
      <Button to="/" variant="primary">Back to Home</Button>
    </div>
  );
}