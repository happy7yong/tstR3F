import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyElement3D from "./Components/MyElement3D.jsx";

function App() {
  return (
    <>
      <Canvas>
        <MyElement3D />
      </Canvas>
    </>
  );
}

export default App;
