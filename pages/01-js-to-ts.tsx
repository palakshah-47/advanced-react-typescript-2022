import type { NextPage } from 'next';

import { Alert } from '../src/01-js-to-ts/alert';

const JsToTs: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Converting JavaScript to TypeScript</h2>

      <Alert messageId="hello-tsx" variant="info" />
    </div>
  );
};

export default JsToTs;
