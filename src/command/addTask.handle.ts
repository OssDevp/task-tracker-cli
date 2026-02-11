import { db } from "../database/config";
import type { TaskEntity } from "../model/task";

export async function addTask(task: TaskEntity) {
  try {
    const query = db.prepare(
      `INSERT INTO tasks (id, description, status, createAt) VALUES ($id, $description, $status, $createAt)`,
    );
    query.run({
      $id: task.id,
      $description: task.description,
      $status: task.status,
      $createAt: task.createdAt,
    });
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}
