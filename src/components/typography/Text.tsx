import { forwardRef } from "react";

import { TextElement } from "./Text.style";

export interface TextProps extends React.ComponentProps<"span"> {
    size: "xs" | "s" | "m" | "l" | "xl";
    weight?: "light" | "regular" | "bold" | "extrabold" | "heavy";
    children: React.ReactNode;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...props }, ref) => {
    return (
        <TextElement ref={ref} {...props}>
            {children}
        </TextElement>
    );
});
