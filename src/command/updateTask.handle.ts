import { db } from "../database/config";

export async function updateTask(id: string, description: string) {
  try {
    const query = db.prepare(
      "UPDATE tasks SET description = $description, updateAt = $updateAt WHERE id = $id;",
    );
    query.run({
      $id: id,
      $description: description,
      $updateAt: new Date().toLocaleString(),
    });
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}

export async function updateStatusInProgress(id: string) {
  try {
    const query = db.prepare(
      "UPDATE tasks SET status = 'in_progress', updateAt = $updateAt WHERE id = $id;",
    );
    query.run({ $id: id, $updateAt: new Date().toLocaleString() });
    console.log("Update succesfully!");
  } catch (error) {
    console.error(error);
  } finally {
    db.close();
  }
}

export async function updateStatusDone(id: string) {
  try {
    const query = db.prepare(
      "UPDATE tasks SET status = 'done', updateAt = $updateAt WHERE id = $id;",
    );
    query.run({ $id: id, $updateAt: new Date().toLocaleString() });
    console.log("Update succesfully!");
  } catch (error) {
    console.error(error);
  } finally {
    db.close();
  }
}
