"use client"

import Header from "./Header"
import themes from "./themes"
import { ThemeProvider,createGlobalStyle } from "styled-components"
import { useState, createContext } from "react"

const Layout = ({children}) => {
    const[theme,setTheme] = useState('light');

    const changeTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

  return (
    <ThemeProvider theme={themes[theme]}>
    <LayoutWrapper onClick={changeTheme}>
    <div>
    <Header />
    {children}
    </div>
    </LayoutWrapper>
    </ThemeProvider>
  )
}

const LayoutWrapper = styled.div`
    background-color:${(props) => props.theme.bgColor};
    background-image: ${(props) => props.theme.bgImage};
    color :${(props) => props.theme.color};

`
export default Layout