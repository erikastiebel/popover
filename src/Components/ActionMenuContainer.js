import React from 'react';

const ActionMenuContainer = React.forwardRef((props, ref) => (
  <div ref={ref} style={props.style} tabIndex="-1">
    {props.children}
  </div>
));

export default ActionMenuContainer;
