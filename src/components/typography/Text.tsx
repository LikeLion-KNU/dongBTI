import { forwardRef } from "react";

import { TextElement } from "./Text.style";

export interface TextProps extends React.ComponentProps<"span"> {
    size: "xs" | "s" | "m" | "l" | "xl";
    children: React.ReactNode;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...props }) => {
    return <TextElement {...props}>{children}</TextElement>;
});
