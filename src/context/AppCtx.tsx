import React from 'react';

interface IAppCtx {
  name: string;
  author: string;
  url: string;
}

const AppCtx = () => React.createContext<IAppCtx | null>(null);

export default AppCtx;
