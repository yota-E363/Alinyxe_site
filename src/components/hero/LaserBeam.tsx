'use client'

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Custom WebGL laser/light-beam effect built on a fullscreen triangle.
 * Renders a soft vertical beam with volumetric fog, animated wisps, and
 * mouse-driven tilt. Lighter than the full LaserFlow source and tuned for
 * the Alinyxe indigo palette.
 */
export function LaserBeam({
  color = "#6366f1",
  intensity = 1,
  className,
}: {
  color?: string;
  intensity?: number;
  className?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    mount.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
        3,
      ),
    );

    const c = new THREE.Color(color);

    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uColor: { value: new THREE.Vector3(c.r, c.g, c.b) },
      uIntensity: { value: intensity },
    };

    const material = new THREE.RawShaderMaterial({
      vertexShader: `
        precision highp float;
        attribute vec3 position;
        void main() { gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: `
        precision highp float;
        uniform float uTime;
        uniform vec2 uRes;
        uniform vec2 uMouse;
        uniform vec3 uColor;
        uniform float uIntensity;

        // hash + value noise
        float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+34.123); return fract(p.x*p.y); }
        float noise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0));
          float d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
        }
        float fbm(vec2 p){
          float v = 0.0; float a = 0.5;
          for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.0; a *= 0.5; }
          return v;
        }

        void main(){
          vec2 uv = (gl_FragCoord.xy - 0.5*uRes) / uRes.y;
          // mouse tilt
          float tilt = (uMouse.x - 0.5) * 0.6;
          uv.x += uv.y * tilt * 0.35;

          // beam shape: soft vertical column centered on x=0
          float beamWidth = 0.06;
          float beamCore = exp(-pow(uv.x / beamWidth, 2.0));
          // wider halo
          float halo = exp(-pow(uv.x / 0.28, 2.0)) * 0.55;
          // taper top
          float vertical = smoothstep(-0.9, 0.1, uv.y) * (1.0 - smoothstep(0.45, 0.9, uv.y));
          float beam = (beamCore + halo) * vertical;

          // wisps flowing upward
          vec2 wuv = vec2(uv.x * 6.0, uv.y * 1.5 - uTime * 0.45);
          float wisp = pow(noise(wuv * 3.0), 3.0) * smoothstep(0.0, 0.25, abs(uv.x) * 0.0 + 0.5);
          wisp *= smoothstep(0.45, 0.05, abs(uv.x));
          wisp *= vertical;

          // volumetric fog
          vec2 fuv = uv * 1.6 + vec2(uTime * 0.05, -uTime * 0.12);
          float fog = fbm(fuv) * 0.7;
          fog *= smoothstep(0.0, 0.6, beam + halo * 0.5);

          float L = beam * 1.4 + wisp * 0.8 + fog * 0.6;
          L *= uIntensity;

          // radial vignette so edges fade
          float vign = 1.0 - smoothstep(0.4, 1.1, length(uv));
          L *= vign;

          vec3 col = uColor * L;
          // slight warm core
          col += vec3(0.6, 0.7, 1.0) * pow(beamCore * vertical, 6.0) * 0.6;

          float a = clamp(L * 1.1, 0.0, 1.0);
          gl_FragColor = vec4(col, a);
        }
      `,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const mesh = new THREE.Mesh(geom, material);
    mesh.frustumCulled = false;
    scene.add(mesh);

    let raf = 0;
    const start = performance.now();
    let mouseTarget = new THREE.Vector2(0.5, 0.5);
    const mouseSmooth = new THREE.Vector2(0.5, 0.5);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseTarget.set(
        (e.clientX - rect.left) / rect.width,
        1 - (e.clientY - rect.top) / rect.height,
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let paused = false;
    const onVis = () => { paused = document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (paused) return;
      mouseSmooth.lerp(mouseTarget, 0.08);
      uniforms.uMouse.value.copy(mouseSmooth);
      uniforms.uTime.value = (performance.now() - start) / 1000;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      geom.dispose();
      material.dispose();
      renderer.dispose();
      if (canvas.parentNode === mount) mount.removeChild(canvas);
    };
  }, [color, intensity]);

  return <div ref={mountRef} className={className} />;
}

export default LaserBeam;