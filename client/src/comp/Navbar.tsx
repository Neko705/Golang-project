import { Container, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { LuListTodo, LuSun } from "react-icons/lu";

function Navbar() {
  // ThemeToggle logic
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Container maxW={"900px"}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* LEFT SIDE */}
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          display={{ base: "none", sm: "flex" }}
        >
          {/* <h1>TodoList</h1> */}
          <LuListTodo size={40} />
        </Flex>

        {/* RIGHT SIDE */}
        <Flex alignItems={"center"}  gap={3}>
          {/* Toggle Color Mode */}
          <Button onClick={toggleTheme} >
            {theme === "light" ? <IoMoon /> : <LuSun size={10} />}
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
