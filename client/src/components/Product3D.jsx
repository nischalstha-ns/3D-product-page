import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export default function Product3D() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <group ref={meshRef}>
      <RoundedBox args={[2, 1.5, 0.5]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#4a90e2" metalness={0.8} roughness={0.2} />
      </RoundedBox>
    </group>
  );
}
