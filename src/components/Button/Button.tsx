import React from 'react';
import clsx from 'clsx'
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  theme?: 'light' | 'dark'

  fullWidth?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  theme = 'light',
  onClick,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={clsx('storybook-button', `storybook-button--${size}`, mode, {
        ['dark-theme']: theme === 'dark' && primary,
        ['storybook-button--fullWidth']: fullWidth
      })}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};


export default Button
