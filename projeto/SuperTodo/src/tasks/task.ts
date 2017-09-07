export interface Task {
  title: string;
  description: string;
  status: TaskStatus;
}

export type TaskStatus = 'TODO' | 'DONE';

export interface TaskView {
  title: string;
  description: string;
  status: TaskViewStatus;
}

export type TaskViewStatus = 'Por fazer' | 'Concluida';

