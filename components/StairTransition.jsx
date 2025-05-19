"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// component
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
<<<<<<< HEAD

          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
=======
>>>>>>> fafa8ce96770960803c0904a5bd12f217a72be9a
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
