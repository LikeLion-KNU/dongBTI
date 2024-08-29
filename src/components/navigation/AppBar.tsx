import { forwardRef } from "react";

import { AppBarElement } from "./AppBar.style";

export interface AppBarProps extends React.ComponentProps<"div"> {
    children: React.ReactNode;
}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(({ children, ...props }, ref) => {
    return (
        <AppBarElement ref={ref} {...props}>
            {children}
        </AppBarElement>
    );
});
