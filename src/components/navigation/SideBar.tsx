import React from "react";

import {SideBarWrapper, Menu} from "./SideBar.style"
import { useNavigate } from "react-router-dom";
import closeIcon from "@/assets/icons/close.svg";

interface SideBarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({isOpen, setIsOpen} : SideBarProps) => {
    const outside = React.useRef<any>();
    const navigate = useNavigate(); 

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

    const handleNavigation = (path: string) => {
        navigate(path);
        handleSideBar(); 
    };

  return ( 
      <SideBarWrapper id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
        <img src = {closeIcon} onClick = {handleSideBar}/>

        <ul>
          <Menu>테스트</Menu>
          <Menu onClick={() => handleNavigation("/analytics")}>통계</Menu>
          <Menu>만든이들</Menu>
        </ul>
      </SideBarWrapper>
    )
}

