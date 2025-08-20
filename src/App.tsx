import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { DraftingCompass, TimerIcon } from 'lucide-react';
import { Container } from './components/container';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>COMPONENTE</Heading>
      </Container>
    </>
  );
}
