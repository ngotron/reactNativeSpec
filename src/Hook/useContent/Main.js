
import { createContext, useState } from "react";
import { Button, View } from "react-native";
import Content from "./Content";

export const ThemeContext = createContext();

const Main = () => {
  const [theme, setTheme] = useState("'dark'");
  const handleToggle = () => {
    setTheme(theme === "'dark'" ? "'light'" : "'dark'")
  }

  console.log("theme", theme)
  return (
    <ThemeContext.Provider value={theme}>
      <View>
        <Button title="Toggle theme" color="black" onPress={handleToggle} />
        <Content />
      </View>
    </ThemeContext.Provider>
  )
}
export default Main