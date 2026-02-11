import { db } from "../database/config";

export async function deleteTask(id: string) {
  if (!id) {
    return console.log("No se puede eliminar si no existe un ID");
  }
  try {
    const query = db.prepare("DELETE FROM tasks WHERE id = $id");
    query.run({
      $id: id,
    });
    console.log("Task deleted successfully");
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}
