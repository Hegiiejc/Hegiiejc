import { useEffect, useState } from 'react';

interface PetalProps {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  animationType: number;
  opacity: number;
}

function SakuraPetal({ left, size, duration, delay, animationType, opacity }: Omit<PetalProps, 'id'>) {
  const animations = ['petal-fall', 'petal-fall-2', 'petal-fall-3'];
  const anim = animations[animationType % 3];

  const colors = [
    { main: '#ffb7c5', shadow: '#ff8fa3' },
    { main: '#ffc4d0', shadow: '#ffa0b0' },
    { main: '#ffd4dc', shadow: '#ffb0c0' },
    { main: '#ffe0e6', shadow: '#ffc0cc' },
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="petal"
      style={{
        left: `${left}%`,
        top: '-5%',
        animation: `${anim} ${duration}s linear ${delay}s infinite`,
        opacity: opacity,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        style={{
          animation: `petal-sway ${duration * 0.7}s ease-in-out ${delay}s infinite`,
        }}
      >
        <defs>
          <radialGradient id={`petal-grad-${left}-${size}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="40%" stopColor={color.main} />
            <stop offset="100%" stopColor={color.shadow} />
          </radialGradient>
        </defs>
        {/* Realistic petal shape */}
        <path
          d="M20 5 C25 5, 35 12, 35 20 C35 28, 28 35, 20 35 C12 35, 5 28, 5 20 C5 12, 15 5, 20 5 Z"
          fill={`url(#petal-grad-${left}-${size})`}
          opacity="0.9"
        />
        <path
          d="M20 8 C20 8, 18 20, 20 32"
          stroke={color.shadow}
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M12 15 C15 18, 20 20, 28 15"
          stroke={color.shadow}
          strokeWidth="0.3"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

export default function SakuraPetals() {
  const [petals, setPetals] = useState<PetalProps[]>([]);

  useEffect(() => {
    const generated: PetalProps[] = [];
    const petalCount = 35;

    for (let i = 0; i < petalCount; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 20,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 15,
        animationType: Math.floor(Math.random() * 3),
        opacity: 0.4 + Math.random() * 0.5,
      });
    }
    setPetals(generated);
  }, []);

  return (
    <>
      {petals.map((petal) => (
        <SakuraPetal
          key={petal.id}
          left={petal.left}
          size={petal.size}
          duration={petal.duration}
          delay={petal.delay}
          animationType={petal.animationType}
          opacity={petal.opacity}
        />
      ))}
    </>
  );
}
