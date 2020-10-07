import React from 'react';

interface WrapperProps {
  isContentWrapper?: boolean,
}

const InnerWrapper: React.FC<WrapperProps> = ({ children, isContentWrapper }) => {
  const wrapperClassList = (isContentWrapper) ? 'inner-wrapper content' : 'inner-wrapper';

  return (
    <div className={wrapperClassList}>
      {children}
    </div>
  );
};

const OuterWrapper: React.FC = ({ children }) => (
  <div className="outer-wrapper">
    {children}
  </div>
);

export { InnerWrapper, OuterWrapper };
