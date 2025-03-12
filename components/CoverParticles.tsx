"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 

const CoverParticles: React.FC = () => {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init && 
        <div className="w-[0px] absolute inset-0 z-0">
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" }
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 200, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#D7D7D7" },
                        links: {
                            color: "#D7D7D7",
                            distance: 150,
                            enable: true,
                            opacity: 0.35,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: { density: { enable: true }, value: 80 },
                        opacity: { value: 0.35 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 5 } },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default CoverParticles;
