import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { ImgHTMLAttributes, forwardRef } from "react";

export const imageVariants = cva(
  "w-12 h-12 p-1 bg-slate-200 rounded-full cursor-pointer",
  {
    variants: {
      size: {
        default: "h-12 w-12",
        sm: "h-8 w-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface TProps
  extends ImgHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof imageVariants> {
  image: string;
}
const Avatar: React.FC<TProps> = forwardRef<HTMLImageElement, TProps>(
  ({ className, image }, ref) => {
    return (
      <img
        ref={ref}
        src={image}
        alt="avatar"
        className={cn(imageVariants({ className }))}
      />
    );
  }
);

export default Avatar;
