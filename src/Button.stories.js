import React from 'react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Default = () => <Button label="Default" onClick={() => alert('Clicked!')} />;
export const LeadingIcon = () => <Button label="Leading Icon" leadingIcon onClick={() => alert('Clicked!')} />;
export const TrailingIcon = () => <Button label="Trailing Icon" trailingIcon onClick={() => alert('Clicked!')} />;
export const BothIcons = () => <Button label="Both Icons" leadingIcon trailingIcon onClick={() => alert('Clicked!')} />;
export const Loader = () => <Button label="Loading..." loader onClick={() => alert('Clicked!')} />;
export const Disabled = () => <Button label="Disabled" disabled onClick={() => alert('Clicked!')} />;
export const CentreAligned = () => <Button label="Centre Aligned" type="Centre Aligned" onClick={() => alert('Clicked!')} />;
export const AllProps = () => (
  <Button
    label="All Props"
    leadingIcon
    trailingIcon
    loader
    type="Centre Aligned"
    onClick={() => alert('Clicked!')}
  />
<<<<<<< HEAD
);
=======
); 
>>>>>>> ea90d47
