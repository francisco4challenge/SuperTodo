export interface Task {
  title: string;
  description: string;
  status: TaskStatus;
}

export type TaskStatus = 'TODO' | 'DONE';
