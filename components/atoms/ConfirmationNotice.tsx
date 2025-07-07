import React from 'react';

interface ConfirmationNoticeProps {
  className?: string;
  message?: string;
}

export const ConfirmationNotice: React.FC<ConfirmationNoticeProps> = ({
  className = "text-sm text-gray-500",
  message = "A confirmation email has been sent to your email address.",
}) => {
  return (
    <p className={className}>
      {message}
    </p>
  );
};