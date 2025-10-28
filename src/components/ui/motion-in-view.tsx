import { motion, type MotionProps } from "framer-motion";
import * as React from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

export interface MotionInViewProps extends Omit<MotionProps, "initial" | "animate"> {
    as?: keyof JSX.IntrinsicElements;
    direction?: Direction;
    delay?: number;
    duration?: number;
    className?: string;
    children?: React.ReactNode;
    // Allow intrinsic props like src, href, etc.
    [key: string]: unknown;
}

export const MotionInView: React.FC<MotionInViewProps> = ({
    as = "div",
    direction = "none",
    delay = 0,
    duration = 0.5,
    className,
    children,
    ...rest
}) => {
    const Component = motion[as as "div"] as unknown as React.ComponentType<Record<string, unknown>>;

    const axis: Record<Direction, { x?: number; y?: number }> = {
        none: {},
        up: { y: 24 },
        down: { y: -24 },
        left: { x: 24 },
        right: { x: -24 },
    };

    const from = axis[direction] ?? {};

    return (
        <Component
            className={className}
            initial={{ opacity: 0, ...from }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration, ease: "easeOut", delay }}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default MotionInView;


