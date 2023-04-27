export interface IRepoOwner {
  avatar_url: string;
  id: number;
  login: string;
}

export interface IRepo {
  id: number;
  name: string;
  default_branch: string;
  description: string | null;
  git_url: string;
  language: string;
  visibility: 'public' | 'private';
  updated_at: string;
  pushed_at: string;
  owner: IRepoOwner;
}
