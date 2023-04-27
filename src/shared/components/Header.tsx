import React, { FC, memo, useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { IColor, routes } from '../types';
import { classNames, sectionColors } from '../constants';
import { Flex } from '@/UI';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { to: routes.home, text: 'Home' },
  { to: routes.profile, text: 'Profile' },
];

const editableRoutes = [routes.home];

const Header: FC = () => {
  const [activeColor, setActiveColor] = useState<IColor>(sectionColors.default);
  const [allSection, setAllSection] = useState<NodeListOf<HTMLElement> | null>(
    null
  );
  const [isEditable, setIsEditable] = useState(true);
  const { scrollY } = useScroll();
  const router = useRouter();

  useEffect(() => {
    setIsEditable(editableRoutes.some((el) => el === router.pathname));
  }, [router.pathname]);

  useEffect(() => {
    setAllSection(
      document.body.querySelectorAll('section.' + classNames.section)
    );
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!allSection) return;
    if (!isEditable) {
      setActiveColor(sectionColors.default);
      return;
    }

    const res: IColor[] = [];

    allSection?.forEach((sec) => {
      if (sec.getBoundingClientRect().y < 71) {
        res.push({
          bg: sec.getAttribute('data-bg') || '',
          text: sec.getAttribute('data-color') || '',
        });
      }
    });

    setActiveColor(res.pop() || sectionColors.default);
  });

  return (
    <motion.div className='Header'>
      <header
        style={{
          backgroundColor: activeColor.bg,
          color: activeColor.text,
        }}
      >
        <Flex className='gap-5 py-5 w-full justify-between container'>
          <Flex>LOGO</Flex>
          <Flex className='gap-3'>
            {links.map(({ text, to }) => (
              <Link href={to} key={to}>
                {text}
              </Link>
            ))}
          </Flex>
        </Flex>
      </header>
    </motion.div>
  );
};

export default memo(Header);
