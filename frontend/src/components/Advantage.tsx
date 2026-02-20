import React from "react";

const advantages: string[] = [
  "24/7 Scalability",
  "Cost Efficiency",
  "Top-Tier Talent",
  "Data Security",
  "Rapid Onboarding",
  "Innovation",
];

const Advantage: React.FC = () => {
  return (
    <section className="advantage">
      <div className="container">
        <h3>THE ARISTOS ADVANTAGE</h3>

        <div className="advantage-grid">
          {advantages.map((item) => (
            <div className="adv-card">
              <span className="adv-icon">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
