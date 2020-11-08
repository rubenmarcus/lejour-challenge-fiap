import React, { lazy, Suspense } from 'react';

const LazyPanel = lazy(() => import('./Panel'));
interface TodoProps {
  endpoint: string
}
const Panel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & TodoProps) => (
  <Suspense fallback={null}>
    <LazyPanel {...props}  />
  </Suspense>
);

export default Panel;
