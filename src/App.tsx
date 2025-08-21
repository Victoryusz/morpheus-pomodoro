import { Container } from './components/Container/index';
import { Logo } from './components/Logo/index.';
import { Menu } from './components/Menu/index.';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown/index.';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='meuInput'>Task</label>
            <input id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
