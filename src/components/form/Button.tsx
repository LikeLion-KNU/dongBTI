import { forwardRef } from "react";

import { ButtonElement } from "./Button.style";

export interface ButtonProps extends React.ComponentProps<"button"> {
    variants: "primary" | "secondary";
    width: string;
    height: string;
    children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ width, height, variants, children, ...rest }, ref) => {
        return (
            <ButtonElement ref={ref} width={width} height={height} variants={variants} {...rest}>
                {children}
            </ButtonElement>
        );
    },
);
