import React, { FC, memo } from 'react';
import { IRepo } from '../types';

interface IProps {
  repo: IRepo;
}

const Repository: FC<IProps> = ({ repo }) => {
  return (
    <div className='border-slate-700 border-[1px] border-solid rounded-lg px-3 py-2'>
      <div>{repo.name}</div>
      <div>
        {repo.language} {repo.default_branch}
      </div>
      <div>{repo.visibility}</div>
    </div>
  );
};

export default memo(Repository);
