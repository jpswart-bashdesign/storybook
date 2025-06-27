import React from 'react';
import { ArrowLeft, ArrowRight, Spinner } from '@phosphor-icons/react';

export const Button = ({
  label = 'Button',
  onClick,
  leadingIcon = false,
  trailingIcon = false,
  loader = false,
  type = 'Auto', // 'Auto' or 'Centre Aligned'
  disabled = false,
  style = {},
}) => {
  const baseStyles = {
    background: '#040404',
    color: '#fcfcfc',
    border: 'none',
    borderRadius: 16,
    height: 60,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: type === 'Centre Aligned' ? 'center' : 'space-between',
    gap: 16,
    padding: '0 16px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    minWidth: 120,
    ...style,
  };

  return (
    <button onClick={onClick} style={baseStyles} disabled={disabled}>
      {leadingIcon && <ArrowLeft size={20} style={{ marginRight: 8 }} />}
      {loader && <Spinner size={20} style={{ margin: '0 8px' }} />}
      {label && (
        <span style={{
          fontSize: 14,
          color: '#fcfcfc',
          whiteSpace: 'nowrap',
        }}>{label}</span>
      )}
      {trailingIcon && <ArrowRight size={20} style={{ marginLeft: 8 }} />}
    </button>
  );
};
