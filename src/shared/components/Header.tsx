import React, { FC, memo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { routes } from '../types';
import { Burger, Flex } from '@/UI';
import s from '@/styles/Header.module.scss';
import { useRouter } from 'next/router';

const links = [
  { to: routes.portfolio, text: 'My works' },
  { to: routes.contacts, text: 'Contacts' },
  { to: routes.about, text: 'About me' },
];

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className={[s.headerWrapper, isOpen ? s.active : ''].join(' ')}>
      <header className={s.header}>
        <Flex className={s.header__body + ' container'}>
          <Flex>
            <Link className={s.link} href={routes.home}>
              Maksim Attsetski
            </Link>
          </Flex>
          <Flex className={s.links}>
            {links.map(({ text, to }) => (
              <Link
                className={[
                  s.link,
                  router.pathname === to ? s.active : '',
                ].join(' ')}
                href={to}
                key={to}
              >
                {text}
                <span />
              </Link>
            ))}
          </Flex>
        </Flex>
      </header>
      <Burger
        onClick={() => setIsOpen((prev) => !prev)}
        className={s.headerWrapper__burger}
        isOpen={isOpen}
      />
    </motion.div>
  );
};

export default memo(Header);
