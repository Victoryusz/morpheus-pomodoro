import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer/index.';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu/index.';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
