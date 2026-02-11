import { TaskStatus } from "../util/StatusEnum";

export class TaskEntity {
  id: string;
  description: string;
  status: TaskStatus;
  createdAt: string;

  constructor(description: string) {
    this.id = crypto.randomUUID();
    this.description = description;
    this.status = TaskStatus.pending;
    this.createdAt = new Date().toLocaleString();
  }
}
