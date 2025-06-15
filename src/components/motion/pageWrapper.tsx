import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
    style={{ height: '100%', overflow: 'scroll' }}
  >
    {children}
  </motion.div>
);
