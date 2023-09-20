import React, { ReactElement, MouseEventHandler } from 'react';

interface IconButtonProps {
  variant: 'primary';
  size: 'large' | 'small';
  icon?: ReactElement;
  text: string;
  position?: 'left' | 'right';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string
  [key:string]: any
}

const Button: React.FC<IconButtonProps> = ({
  variant="primary",  
  size = 'large',
  icon,
  text,
  position,
  disabled = false,
  onClick,
  className = "",
  ...otherProps
}) => {
  const renderIcon = (): ReactElement | null => {
    if (icon) {
        return React.cloneElement(icon);
      }
    return null;
  };

  const getButtonClasses = (): string => {
    let classes = 'flex items-center space-x-2  focus:outline-none  text-white shadow-m  bg-secondary-500 hover:bg-secondary-600 disabled:opacity-40 disabled:cursor-not-allowed ' ;
      if (size === 'large') {
        classes += ' text-xl h-[52px] rounded-[26px] px-5 ';
      } else if (size === 'small') {
        classes += ' text-base h-[44px] rounded-[22px] px-4 ';
      }
    return classes;
  };

  return (
    <button
      className={` ${getButtonClasses()} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {position === 'left' && renderIcon()}
      <span>{text}</span>
      {position === 'right' && renderIcon()}
    </button>
  );
};

export default Button;
