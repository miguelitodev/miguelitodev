import { motion, MotionProps } from "framer-motion";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type ButtonFlashingProps = {
  children: string | React.ReactNode;
  className?: string;
  action: () => void;
  tooltip?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

const initial: { [key: string]: string | number } = {
  "--x": "100%",
  scale: 1,
};

const animate: { [key: string]: string | number } = {
  "--x": "-100%",
};

export const ButtonFlashing: React.FC<ButtonFlashingProps> = ({
  children,
  className,
  action,
  tooltip,
  ...rest
}: ButtonFlashingProps): JSX.Element => {
  const button = (
    <motion.button
      onClick={() => action()}
      initial={initial}
      animate={animate}
      whileTap={{ scale: 0.8 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 12px rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.2 },
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      {...rest}
      className={`px-6 py-2 rounded-md relative radial-gradient border ${className}`}
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );

  return tooltip ? (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={8}
            className="z-50 px-3 py-1 rounded-md bg-zinc-900/90 text-white text-xs shadow-lg backdrop-blur-sm border border-white/10 animate-fadeIn transition-all duration-300 data-[state=delayed-open]:scale-100 data-[state=closed]:scale-95 data-[state=closed]:opacity-0 data-[state=delayed-open]:opacity-100"
          >
            {tooltip}
            <Tooltip.Arrow className="fill-zinc-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ) : (
    button
  );
};
