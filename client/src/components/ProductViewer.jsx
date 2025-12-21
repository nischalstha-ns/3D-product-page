import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import Product3D from './Product3D';
import './ProductViewer.css';

export default function ProductViewer() {
  return (
    <div className="viewer">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={true} enablePan={false} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Product3D />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
