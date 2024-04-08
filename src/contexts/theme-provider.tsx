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
	useEffect(() => {
		const savedTheme = Cookies.get("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
      console.log(`the theme should be light`)
      Cookies.set("theme", "light");
    }
	}, []);

	useEffect(() => {
		const setThemeOnChange = () => {
			if(theme !== "") {
				document.documentElement.classList.remove("light", "dark");
				document.documentElement.classList.add(theme);
			} else {
				document.documentElement.classList.remove("light", "dark");
				document.documentElement.classList.add("light");
			}
		};
		setThemeOnChange();
	}, [theme]);

	const toggleTheme = (themeTo: any) => {
		console.log("toggleTheme function called");
		setTheme(themeTo);
		Cookies.set("theme", themeTo);
	};

	const value = {
		theme: theme,
		toggleTheme: toggleTheme,
	};
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