import React from "react";
import { BarChart3 } from 'lucide-react';

import ContentAnalyzer from "./components/ContentAnalyzer.jsx";
import "../styles.css";

export default function App() {
  return (
    <div className="shell">
      <header className="top">
        <div className="brand">
          <div className="gem"><BarChart3 size={18}/></div>
          <strong>SocialMediaContentAnalyzer</strong>
        </div>
        <div className="top-actions">
        </div>
      </header>

      <ContentAnalyzer />
    </div>
  );
}
