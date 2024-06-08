import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={`relative p-[4px] group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 rounded-3xl z-[1] opacity-60 md:group-hover:opacity-90 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#F6D10A,transparent),radial-gradient(circle_farthest-side_at_100%_0,#F6D10A,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#F6D10A,transparent),radial-gradient(circle_farthest-side_at_0_0,#F6D10A,#F6D10A)]`}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 rounded-3xl z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#080700,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f7d622,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f7d622,transparent),radial-gradient(circle_farthest-side_at_0_0,#080700,#080700)]`}
      />
      <motion.div
        className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-5xl md:text-7xl text-[#F6D10A] font-custom"
        style={{ zIndex: 30 }}
      >
        $W
      </motion.div>
      <motion.a
        href="/"
        className="absolute bottom-[18px] right-5 md:bottom-9 md:right-10 md:hover:scale-105 transition ease-in-out duration-200 text-2xl md:text-5xl bg-[#F6D10A] px-4 py-2 rounded-md font-custom"
        style={{ zIndex: 30 }}
      >
        <div className="-mt-2 md:mb-1">BUY</div>
      </motion.a>
      <div className={`relative z-20 ${className}`}>{children}</div>
    </div>
  );
};