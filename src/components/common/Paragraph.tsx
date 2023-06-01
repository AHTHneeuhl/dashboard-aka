import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { HTMLAttributes, forwardRef } from "react";

const paragraphVariants = cva("max-w-prose mb-2 text-center", {
  variants: {
    variant: {
      primary: "text-black",
      secondary: "text-neutral-600",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface TProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph: React.FC<TProps> = forwardRef<HTMLParagraphElement, TProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
