import React, { FC, PropsWithChildren, memo } from 'react';
import { motion } from 'framer-motion';

import { Flex } from '@/UI';

interface ITitleProps extends PropsWithChildren {
  x?: number;
  inx?: number;
}

const Title: FC<ITitleProps> = ({ children, x = 0, inx = 1 }) => {
  return (
    <motion.div className='relative text-left overflow-hidden' style={{ x }}>
      <motion.div
        className='absolute top-0 w-full h-full px-2 bg-white'
        initial={{ x: '-100%' }}
        animate={{ x: '101%', transition: { duration: 0.7, delay: 0.4 * inx } }}
      />
      <div className='font-bold text-white text-8xl my-3'>{children}</div>
    </motion.div>
  );
};

const HomeGreeting: FC = () => {
  return (
    <div className='flex min-h-screen justify-center'>
      <Flex className='items-start flex-col'>
        <Title x={-100}>Hello!</Title>
        <Title x={-50} inx={1.2}>
          I&apos;m Maksim
        </Title>
        <Title inx={1.4}>Frontend Dev</Title>
      </Flex>
    </div>
  );
};

export default memo(HomeGreeting);
