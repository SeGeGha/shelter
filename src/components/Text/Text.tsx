import React from 'react';

import './Text.scss';

interface TextProps {
  heading: string,
  subheadings?: Array<string>,
}

const Text: React.FC<TextProps> = ({ heading, subheadings, children }) => (
  <div className="text">
    <h3 className="text__heading">
      {heading}
    </h3>
    {subheadings && subheadings.map((subheading, id) => (
      <p className="text__subheading" key={id}>
        {subheading}
      </p>
    ))}
    {children}
  </div>
);

export default Text;
