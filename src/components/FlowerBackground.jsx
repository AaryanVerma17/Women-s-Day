import { useEffect, useState } from "react";

const flowers = ["🌸", "🌺", "🌷", "🌹", "💐", "🌻", "💮"];

const FlowerBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const id = Date.now() + Math.random();
      const flower = flowers[Math.floor(Math.random() * flowers.length)];
      const left = Math.random() * 100;
      const duration = 10 + Math.random() * 10;
      const delay = Math.random() * 5;
      const size = 16 + Math.random() * 16;

      return { id, flower, left, duration, delay, size };
    };

    // Create initial particles
    const initialParticles = Array.from({ length: 15 }, createParticle);
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = [...prev, createParticle()];
        // Keep only last 20 particles
        if (newParticles.length > 20) {
          return newParticles.slice(-20);
        }
        return newParticles;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="flower-particle"
          style={{
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            fontSize: `${particle.size}px`,
          }}
        >
          {particle.flower}
        </span>
      ))}
    </div>
  );
};

export default FlowerBackground;
