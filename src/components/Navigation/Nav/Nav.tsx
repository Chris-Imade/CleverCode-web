import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Nav = () => (
  <motion.ul className="mt-12 relative" variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}

  </motion.ul>
);

const itemIds = ["Home", "Services", "Our Projects", "About Us", "auth"];
