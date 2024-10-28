import { useEffect, useState } from "react";

export const useTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            setIsDarkTheme(mediaQuery.matches);

            const handleThemeChange = (event: MediaQueryListEvent) => {
                setIsDarkTheme(event.matches);
            };

            mediaQuery.addEventListener("change", handleThemeChange);
            return () => {
                mediaQuery.removeEventListener("change", handleThemeChange);
            };
        }
    }, []);
    return isDarkTheme;
};
