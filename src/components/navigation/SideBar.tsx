import React from "react";

import {SideBarWrapper, Menu} from "./SideBar.style"

interface SideBarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({isOpen, setIsOpen} : SideBarProps) => {
    const outside = React.useRef<any>();

    React.useEffect(() => {    
        document.addEventListener('mousedown', handlerOutsie);    
        return () => {      
            document.removeEventListener('mousedown', handlerOutsie);    
        };  
    });   
    
    const handlerOutsie = (e: any) => {    
        if (!outside.current.contains(e.target)) {      
            handleSideBar();    
        }  
    };   
    
    const handleSideBar = () => {    
        setIsOpen(false);  
    };

  return (
    
      <SideBarWrapper id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="none" onClick = {handleSideBar}>
            <g stroke="#37CDCD" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" clip-path="url(#a)" filter="url(#b)">
                <path d="m22.5 7.5-15 15M7.5 7.5l15 15"/>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h30v30H0z"/>
                </clipPath>
                <filter id="b" width="38" height="38" x="-4" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_82_77"/>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_82_77" result="shape"/>
                </filter>
            </defs>
        </svg>

        <ul>
          <Menu>테스트</Menu>
          <Menu>통계</Menu>
          <Menu>만든이들</Menu>
        </ul>
      </SideBarWrapper>
    
)
}

