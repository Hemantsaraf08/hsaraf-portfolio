import Image from "next/image";
import React from "react";

interface FloatingInputProps {
  rows: number;
  cols: number;
  placeholder: string;
  showClearTextButton?: boolean;
  rightIcon?: any;
  leftIcon?: any;
  helperText?: string;
  name?: string;
  hasError?: boolean;
  errorMessage?: string;
  value?: string;
  textLimit?: number;
  onChange: (value: string) => void;
  onClearText?: () => void;
  [key: string]: any;
  disable?: boolean;
}

const FloatingTextArea: React.FC<FloatingInputProps> = ({
  rows,
  cols,
  placeholder,
  showClearTextButton,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  helperText,
  name,
  hasError,
  errorMessage,
  disable,
  value,
  textLimit,
  onChange,
  onClearText,
  ...otherProps
}) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  const handleClearText = () => {
    if (onClearText) {
      onClearText();
    }
  };

  return (
    <div>
      <div className="relative">
        {LeftIcon && (
          <div className="absolute left-2 top-[15px]">
            <Image src={LeftIcon} alt="Left Icon"></Image>
          </div>
        )}
        <textarea
          rows={rows}
          cols={cols}
          value={value}
          name={name}
          onChange={handleChange}
          // ref={(ref) => ref && ref.focus()}
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
          className={`block resize-none px-4 ${
            disable ? "caret-transparent" : ""
          } ${
            LeftIcon ? "pl-[30px]" : "pl-4"
          } pb-2.5 pt-4 w-full text-sm font-medium text-NEUTRAL-800 bg-transparent rounded-lg border disabled:border-NEUTRAL-400 ${
            hasError ? "border-DESTRUCTIVE-600" : "border-NEUTRAL-400"
          } appearance-none focus:outline-none focus:ring-0 focus:shadow peer`}
          placeholder={" "}
          {...otherProps}
          disabled={disable}
          style={{ color: disable ? "#B8B8B8" : "#000000" }}
        />
        <label
          className={`absolute text-sm ${
            hasError ? "text-DESTRUCTIVE-600" : "text-NEUTRAL-500"
          } peer-disabled:text-NEUTRAL-400 duration-300 transform -translate-y-4 scale-75 top-2  origin-[0] ${
            LeftIcon && !value ? "bg-transparent" : "bg-white"
          } px-2 peer-focus:bg-white peer-focus:px-1.5 peer-focus:text-NEUTRAL-800 peer-focus:font-medium peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 ${
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
          <div className="absolute right-3 top-3 peer-disabled:text-NEUTRAL-400">
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

export default FloatingTextArea;
