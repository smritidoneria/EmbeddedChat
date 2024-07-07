import React from 'react';
import { Box, useComponentOverrides } from '@embeddedchat/ui-elements';

const MessageGenericPreviewThumb = (className = '', style = {}, ...props) => {
  const { classNames, styleOverrides } = useComponentOverrides(
    'MessageGenericPreviewThumb'
  );
  return (
    <Box
      className={`ec-message-generic-preview__thumb ${className} ${classNames}`}
      style={{ ...style, ...styleOverrides }}
      {...props}
    />
  );
};

export default MessageGenericPreviewThumb;
