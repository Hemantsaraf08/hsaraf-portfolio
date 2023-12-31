/* Responsive typography component that uses tailwind media query to apply
different font sizes based on screen width, 

Usage example: 
<Typography variant="h1">Heading 1</Typography>
<Typography variant="paragraph" as="div">Paragraph text with div</Typography>
<Typography variant="small">Small text</Typography>
 */


import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "paragraph"
  | "paragraph-small"
  | "small";

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  paragraph: "p",
  "paragraph-small": "p",
  small: "span"
};

// modify font sizes/font weight as per the design given, if needed
const sizes: Record<Variant, string> = {
  h1: "text-5xl font-bold sm:text-4xl",
  h2: "text-4xl font-bold sm:text-3xl",
  h3: "text-3xl font-bold sm:text-2xl",
  h4: "text-2xl font-bold sm:text-1xl",
  h5: "text-xl font-semibold sm:text-lg",
  paragraph: "text-lg sm:text-md",
  "paragraph-small": "text-md sm:text-sm",
  small: "text-sm sm:text-xs"
};

export const Typography = ({ variant, children, className = "", as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};