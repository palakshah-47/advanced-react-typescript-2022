import type { NextPage } from 'next';

import { DualAlert } from '../src/02-mutually-exclusive/dual-alert';

const MutuallyExclusive: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Mutually exclusive props</h2>
      <DualAlert messageId="hello-tsx" variant="danger" />
      <DualAlert message="Can we do mutually exclusive props?" />
    </div>
  );
};

export default MutuallyExclusive;
