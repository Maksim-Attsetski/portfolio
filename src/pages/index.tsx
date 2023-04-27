import React, { FC, memo } from 'react';
import { Flex, Section } from '@/UI';
import { Star3d, TextWithBorder } from '@/shared';
import { Canvas } from '@react-three/fiber';

const Home: FC = () => {
  return (
    <div>
      <Section headerStyles={{ bg: '#545ffe', text: '#fff' }}>
        <div className='min-h-screen'>
          <br />
          <br />
          <br />
          <Flex className='justify-center flex-col'>
            <TextWithBorder text='Hello world 1' />
            <TextWithBorder text='Hello world 2' />
            <TextWithBorder text='Hello world 3' />
          </Flex>
        </div>
      </Section>
      <Section headerStyles={{ bg: '#d26060', text: '#fff' }}>
        <div className='min-h-screen'>ddddd</div>
      </Section>
      <Section headerStyles={{ bg: '#60d26a', text: '#fff' }}>
        <div className='min-h-screen'>Hello</div>
      </Section>
    </div>
  );
};

export default memo(Home);
