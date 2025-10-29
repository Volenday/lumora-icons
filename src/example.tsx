import React from "react";
import { Account, AccountAlert } from "./index";

// ExampleUsage - Demonstrates basic usage of Lumora Icons
const ExampleUsage: React.FC = () => {
  return (
    <div className="grid">
      <div className="card">
        <Account size={24} />
        <span>Default (24)</span>
      </div>
      <div className="card">
        <Account size={48} />
        <span>Size 48</span>
      </div>
      <div className="card">
        <Account size={32} color="#2563eb" />
        <span>Blue</span>
      </div>
      <div className="card">
        <AccountAlert size={24} />
        <span>Account Alert</span>
      </div>
      <div className="card">
        <AccountAlert size={40} color="#16a34a" />
        <span>Green 40</span>
      </div>
    </div>
  );
};

export default ExampleUsage;
