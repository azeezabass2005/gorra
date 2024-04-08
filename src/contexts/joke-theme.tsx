"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ThemeContextType {
	theme: string;
	toggleTheme: (themeTo: any) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(
	null
);

const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		const savedTheme = Cookies.get("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemDefaultIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if(systemDefaultIsDark) {
        setTheme("dark")
        Cookies.set("theme", "dark")
        console.log("The system default theme is dark")
      } else {
        setTheme("light");
        Cookies.set("theme", "light");
      }
    }
    setIsLoading(false)
	}, []);

	useEffect(() => {
		const setThemeOnChange = () => {
			if(theme !== "") {
				document.documentElement.classList.remove("light", "dark");
				document.documentElement.classList.add(theme);
			} else {
				document.documentElement.classList.remove("light", "dark");
        const systemDefaultIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        if(systemDefaultIsDark) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.add("light")
        }
			}
		};
		setThemeOnChange();
	}, [theme]);

	const toggleTheme = (themeTo: any) => {
		console.log("toggleTheme function called");
    if(themeTo === "system") {
      const systemDefaultIsDark = window.matchMedia('(prefers-color-scheme: dark').matches
      if(systemDefaultIsDark) {
        setTheme("dark")
        Cookies.set("theme", "dark")
      } else {
        setTheme("light")
        Cookies.set("theme", "light")
      }
    } else {
      setTheme(themeTo);
		  Cookies.set("theme", themeTo);
    }
	};

	const value = {
		theme: theme,
		toggleTheme: toggleTheme,
	};

  if(isLoading) {
    return null
  }
  
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const { theme, toggleTheme }: any = useContext(ThemeContext);
	return { theme, toggleTheme };
};

export default ThemeProvider;