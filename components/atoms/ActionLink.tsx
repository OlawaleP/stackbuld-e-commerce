import React from 'react';
import Link from 'next/link';

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = ({
  href,
  children,
  className = "block",
}) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};