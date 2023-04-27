import React, { FC, memo, useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  text: string;
  className?: string;
}

const TextWithBorder: FC<IProps> = ({ text, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const container = {
    hidden: { fill: '#fff' },
    visible: {
      fill: '#fff',
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { fill: '#ffffff00' },
    visible: { fill: '#fff' },
  };

  return (
    <div className={['font-black text-4xl', className].join(' ')}>
      <motion.svg
        viewBox='0 0 100 20'
        variants={container}
        initial='hidden'
        className='h-5 overflow-visible mb-5'
        animate={isHovered ? 'visible' : 'hidden'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <motion.text
          x='0'
          y='15'
          stroke='#fff'
          strokeWidth='1px'
          fill='#ffffff00'
        >
          {text.split('').map((el, inx) => (
            <motion.tspan key={inx} variants={item} dy='0'>
              {el}
            </motion.tspan>
          ))}
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default memo(TextWithBorder);
