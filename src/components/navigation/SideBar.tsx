import React from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "@/assets/icons/close.svg";

import { SideBarWrapper, Menu } from "./SideBar.style";

interface SideBarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
    const outside = React.useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        document.addEventListener("mousedown", handlerOutside);
        return () => {
            document.removeEventListener("mousedown", handlerOutside);
        };
    });

    const handlerOutside = (e: MouseEvent) => {
        if (outside.current && !outside.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <SideBarWrapper id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
            <img src={closeIcon} onClick={() => setIsOpen(false)} />

            <ul>
                <Menu onClick={() => handleNavigation("/")}>테스트</Menu>
                <Menu onClick={() => handleNavigation("/analytics")}>통계</Menu>
                <Menu onClick={() => handleNavigation("/")}>만든이들</Menu>
            </ul>
        </SideBarWrapper>
    );
};
