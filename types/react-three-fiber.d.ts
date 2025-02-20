import * as THREE from 'three'
import { ReactThreeFiber } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
    boxGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
    meshStandardMaterial: ReactThreeFiber.MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
    meshBasicMaterial: ReactThreeFiber.MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>
    ambientLight: ReactThreeFiber.LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    directionalLight: ReactThreeFiber.LightNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
    pointLight: ReactThreeFiber.LightNode<THREE.PointLight, typeof THREE.PointLight>
    spotLight: ReactThreeFiber.LightNode<THREE.SpotLight, typeof THREE.SpotLight>
    group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>
    color: { attach?: string; args?: [THREE.Color | string | number] }
  }
} 