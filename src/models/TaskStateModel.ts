import type { TaskModel } from './TaskModels';

// Estado -> Componente -> Filhos (Children)

export type TaskStateModel = {
  tasks: TaskModel[]; // Historico, MainForm
  secondsRemaining: number; // Home, CounteDown, Historico, MainForm, Button
  formattedSecondsRemaining: string; // Título, CountDown,
  activeTask: TaskModel | null; // Home, CounteDown, Historico, MainForm, Button
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
