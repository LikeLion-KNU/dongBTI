import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "@/assets/icons/close.svg";
import headerImage from "@/assets/images/sidabar_header.png";

import { SideBarWrapper, Menu, Backdrop } from "./SideBar.style";

interface SideBarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
    const outside = React.useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
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
        setIsOpen(false);
        navigate(path);
    };

    return (
        <>
            <SideBarWrapper id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
                <img src={closeIcon} className="close" onClick={() => setIsOpen(false)} />
                <img src={headerImage} />

                <ul>
                    <Menu onClick={() => handleNavigation("/")}>테스트</Menu>
                    <Menu onClick={() => handleNavigation("/analytics")}>통계</Menu>
                    <Menu onClick={() => handleNavigation("/credits")}>만든이들</Menu>
                </ul>
            </SideBarWrapper>
            <Backdrop className={isOpen ? "open" : ""} />
        </>
    );
};
