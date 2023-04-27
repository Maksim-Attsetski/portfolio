import React, { FC, memo } from 'react';

import { IRepo, portfolioService } from '@/widgets/Portfolio';

interface IProps {
  repos: IRepo[];
}

const profile: FC<IProps> = ({ repos }) => {
  return (
    <div className='container'>
      <div>my works {repos.length}</div>
      <br />
      <hr />
      <br />
      <div>
        {repos.map((el) => (
          <div key={el.id}>
            <div>{el.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const repos = await portfolioService.getRepositories();

  return { props: { repos } };
}

export default memo(profile);
