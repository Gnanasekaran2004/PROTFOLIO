import React, { useRef, useState } from 'react';

const GlareHover = ({
    children,
    className = '',
    glareOpacity = 0.25,
    glareAngle = -25,
    glareSize = 300,
    transitionDuration = 700,
    playOnce = false,
}) => {
    const containerRef = useRef(null);
    const [glareStyle, setGlareStyle] = useState({});
    const [hasPlayed, setHasPlayed] = useState(false);

    const handleMouseMove = (e) => {
        if (playOnce && hasPlayed) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setGlareStyle({
            background: `radial-gradient(circle ${glareSize}px at ${x}px ${y}px, rgba(255, 255, 255, ${glareOpacity}), transparent)`,
            transform: `rotate(${glareAngle}deg)`,
            transition: `opacity ${transitionDuration}ms ease`,
            opacity: 1,
        });

        if (playOnce) {
            setHasPlayed(true);
        }
    };

    const handleMouseLeave = () => {
        setGlareStyle((prev) => ({
            ...prev,
            opacity: 0,
            transition: `opacity ${transitionDuration}ms ease`,
        }));
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glare overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-10"
                style={glareStyle}
            />

            {/* Content */}
            <div className="relative z-0">
                {children}
            </div>
        </div>
    );
};

export default GlareHover;
