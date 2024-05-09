import { FC } from 'react';
import { useIntl } from 'react-intl';

type AlertProps = {
  messageId: string;
  variant: 'error' | 'success' | 'info' | 'warning';
};

export const Alert: FC<AlertProps> = ({ messageId, variant }) => {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error('The messageId prop is required');
  }
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {formatMessage({ id: messageId })}
    </div>
  );
};
