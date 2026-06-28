import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "./ThemeProvider";

export default function ParticlesBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const isLight = theme === "light";
  
  // Choose colors that fit the automation/tech theme and the current mode
  const linkColor = isLight ? "#94a3b8" : "#334155";
  const particleColors = isLight 
    ? ["#0ea5e9", "#10b981", "#8b5cf6"] // sky, emerald, violet for light
    : ["#0284c7", "#059669", "#6d28d9"]; // darker cyan, green, purple for dark

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0 pointer-events-auto opacity-60"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.8,
                color: isLight ? "#0ea5e9" : "#00d4ff"
              },
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: particleColors,
          },
          links: {
            color: linkColor,
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 60,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
