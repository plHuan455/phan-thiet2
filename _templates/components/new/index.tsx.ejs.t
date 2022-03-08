---
to: src/components/<%= level %>/<%= h.toPascalCase(name) %>/index.tsx
---
import React from 'react';

interface <%= h.toPascalCase(name) %>Props {
}

const <%= h.toPascalCase(name) %>: React.FC<<%= h.toPascalCase(name) %>Props> = ({ children }) => (
  <div>{children}</div>
);

<%= h.toPascalCase(name) %>.defaultProps = {
};

export default <%= h.toPascalCase(name) %>;
