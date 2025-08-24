import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // Quando o  timer chega ao final
  interruptDate: number | null; // Quando task for interrompida
  type: keyof TaskStateModel['config'];
};
