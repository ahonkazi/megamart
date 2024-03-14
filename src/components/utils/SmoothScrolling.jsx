"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export const SmoothScrolling = ({ children }) => {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
            {children}
        </ReactLenis>
    );
}
