import { forwardRef } from "react";

import { InputElement } from "./Input.style";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
    variants: "primary" | "secondary";
    width: string;
    height: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ width, height, variants, ...rest }, ref) => {
        return (
            <InputElement ref={ref} width={width} height={height} variants={variants} {...rest} />
        );
    },
);