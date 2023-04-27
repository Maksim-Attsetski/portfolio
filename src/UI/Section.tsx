import React, { FC, PropsWithChildren, memo } from 'react';
import { motion } from 'framer-motion';

import { IColor, classNames } from '@/shared';

interface ISectionProps extends PropsWithChildren {
  headerStyles: IColor;
  sectionStyles?: IColor;
}

const Section: FC<ISectionProps> = ({
  headerStyles,
  children,
  sectionStyles = headerStyles,
}) => {
  return (
    <motion.section
      data-color={headerStyles.text}
      data-bg={headerStyles.bg}
      style={{ backgroundColor: sectionStyles.bg, color: sectionStyles.text }}
      className={classNames.section}
    >
      {children}
    </motion.section>
  );
};

export default memo(Section);
