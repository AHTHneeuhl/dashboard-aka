import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offest-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-envents-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        action: "bg-blue-600 text-white hover:bg-blue-700 transition",
      },
      size: {
        default: "h-10 py-2 px-5",
        sm: "h-9 px-4 rounded-full",
        lg: "h-11 px-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface TProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<TProps> = forwardRef<HTMLButtonElement, TProps>(
  ({ isLoading, className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
