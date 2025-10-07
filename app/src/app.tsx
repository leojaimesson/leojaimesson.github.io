import { Container } from "./components/Container";
import { Presentation } from "./components/Presentation";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

export function App() {
  return (
    <ThemeProvider>
      <Container>
        <ThemeToggle />
        <Presentation />
      </Container>
    </ThemeProvider>
  );
}
