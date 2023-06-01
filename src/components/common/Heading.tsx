import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { HTMLAttributes, forwardRef } from "react";

const headingVariants = cva(
  "text-left font-bold leading-tight tracking-tighter",
  {
    variants: {
      variant: {
        primary: "text-primary",
        secondary: "text-secondary",
      },
      size: {
        default: "text-2xl",
        lg: "text-3xl",
        sm: "text-xl",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
);

interface TProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: React.FC<TProps> = forwardRef<HTMLHeadingElement, TProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
