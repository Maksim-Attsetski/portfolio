import React, { FC, PropsWithChildren, memo } from 'react';
import s from '@/styles/Burger.module.scss';
import { motion } from 'framer-motion';

interface IProps {
  className?: string;
  onClick: () => void;
  isOpen?: boolean;
}
const lines = [s.firstLine, s.secondLine, s.thirdLine];
const Burger: FC<IProps> = ({ onClick, className = '', isOpen = false }) => {
  return (
    <motion.div
      className={[className, s.burger, isOpen ? s.active : ''].join(' ')}
      onClick={onClick}
    >
      {lines.map((el) => (
        <motion.div
          className={el}
          key={el}
          animate={
            isOpen ? { backgroundColor: '#333' } : { backgroundColor: '#fff' }
          }
          initial={false}
        />
      ))}
    </motion.div>
  );
};

export default memo(Burger);
