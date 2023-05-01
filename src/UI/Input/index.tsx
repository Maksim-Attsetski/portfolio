import React from 'react';
import { memo, useEffect, useState } from 'react';
import { motion, useAnimation, transform } from 'framer-motion';

import s from './Input.module.scss';

const maxLength = 20;
const halfLength = Math.round(maxLength / 2);
const mapRemainingToColor = transform(
  [Math.ceil(maxLength / 10), halfLength],
  ['#ff008c', '#ccc']
);
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);

const Input = () => {
  const [value, setValue] = useState('');
  const charactersRemaining = maxLength - value.length;
  const controls = useAnimation();

  useEffect(() => {
    if (charactersRemaining > halfLength) return;

    controls.start({
      scale: 1,
      transition: {
        type: 'spring',
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.length]);

  return (
    <div className={s.container}>
      <input
        maxLength={maxLength}
        className={s.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={s.number}>
        <motion.span
          className={s.span}
          animate={controls}
          style={{ color: mapRemainingToColor(charactersRemaining) }}
        >
          {charactersRemaining}
        </motion.span>
      </div>
    </div>
  );
};

export default memo(Input);
