import React from 'react';

// Icon assets (replace with actual URLs or import SVGs as needed)
const leadingIconUrl = "http://localhost:3845/assets/dab7335e9b170b1344b11dad3876233299cbc549.svg";
const trailingIconUrl = "http://localhost:3845/assets/cddbe22a5d55186f7e0afda43c0c8743c0e10d7b.svg";

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
      {leadingIcon && (
        <img
          src={leadingIconUrl}
          alt=""
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
      )}
      {loader ? (
        <span style={{ margin: '0 8px' }}>⏳</span> // Replace with spinner if needed
      ) : null}
      {label && (
        <span style={{
          fontSize: 14,
          color: '#fcfcfc',
          whiteSpace: 'nowrap',
        }}>{label}</span>
      )}
      {trailingIcon && (
        <img
          src={trailingIconUrl}
          alt=""
          style={{ width: 20, height: 20, marginLeft: 8 }}
        />
      )}
    </button>
  );
};
