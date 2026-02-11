import { db } from "../database/config";
import type { TaskEntity } from "../model/task";

export async function getTaskById(id: string) {
  try {
    const query = db.prepare("SELECT * FROM tasks WHERE id = $id");
    const data = query.get({ $id: id }) as TaskEntity;
    console.table(data);
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}
