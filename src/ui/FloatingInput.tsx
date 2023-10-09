import React, { ChangeEvent } from "react";

interface FloatingInputProps {
  id: string;
  type?: string;
  placeholder: string;
  showClearTextButton?: boolean;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  helperText?: string;
  hasError?: boolean;
  errorMessage?: string;
  value: string | number;
  disabled?: boolean;
  textColor?: string;
  truncate?: boolean;
  borderTransparent?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearText?: () => void;
  onRghtIconClick?: () => void;
  [key: string]: any;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  id,
  type,
  placeholder,
  showClearTextButton,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  helperText,
  hasError,
  errorMessage,
  value,
  disabled,
  textColor,
  borderTransparent,
  truncate,
  onChange,
  onClearText,
  onRghtIconClick,
  ...otherProps
}) => {
    
  const handleClearText = () => {
    if (onClearText) {
      onClearText();
    }
  };

  const handleRightIconClick = () => {
    if (onRghtIconClick) {
      onRghtIconClick();
    }
  };
  return (
    <div className="flex-1">
      <div className={`relative ${borderTransparent && "bottom-[-3px]"}`}>
        {LeftIcon && (
          <div className="absolute left-2 top-[15px]">{LeftIcon}</div>
        )}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={`block px-4 ${truncate && "truncate"} ${
            borderTransparent ? "border-transparent" : "border"
          } ${
            LeftIcon ? "pl-[30px]" : "pl-4"
          } pb-3 pt-3.5 w-full text-sm font-medium ${
            textColor ? textColor : "text-NEUTRAL-800"
          } bg-transparent rounded-lg disabled:border-NEUTRAL-400 ${
            hasError ? "border-DESTRUCTIVE-600" : "border-NEUTRAL-400"
          } appearance-none focus:outline-none focus:ring-0 focus:shadow peer disabled:text-NEUTRAL-500`}
          placeholder={" "}
          disabled={disabled}
          {...otherProps}
        />
        <label
          htmlFor={id}
          className={`absolute text-sm ${borderTransparent && "pl-3"} ${
            hasError ? "text-DESTRUCTIVE-600" : "text-NEUTRAL-500"
          } peer-disabled:text-NEUTRAL-400 duration-300 transform -translate-y-4 scale-75 top-1.5  origin-[0] ${
            LeftIcon && !value ? "bg-transparent" : "bg-white"
          } px-2 peer-focus:bg-white peer-focus:px-1.5 peer-focus:text-NEUTRAL-800 peer-focus:font-medium peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 ${
            LeftIcon && !value ? "left-6" : "left-2"
          }`}
        >
          {placeholder}
        </label>
        {showClearTextButton && value && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-2 top-[14px] h-5 w-5 cursor-pointer text-gray-500"
            onClick={handleClearText}
          >
            <g id="Icon/Outline/x-circle">
              <path
                id="Icon"
                d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        )}
        {RightIcon && (
          <div
            onClick={handleRightIconClick}
            className={`absolute right-3 top-3.5 peer-disabled:text-NEUTRAL-400 ${
              onRghtIconClick ? "cursor-pointer" : ""
            }`}
          >
            {RightIcon}
          </div>
        )}
      </div>
      {helperText && !hasError && (
        <p
          className={`mt-2 text-sm ${
            value ? "text-NEUTRAL-800" : "text-NEUTRAL-400"
          }`}
        >
          {helperText}
        </p>
      )}
      {errorMessage && hasError && (
        <p className="mt-2 text-sm text-DESTRUCTIVE-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default FloatingInput;
