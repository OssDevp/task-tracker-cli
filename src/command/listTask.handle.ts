import { db } from "../database/config";
import type { TaskEntity } from "../model/task";

export async function listTasks() {
  try {
    const query = db.query("select * from tasks;");
    const data = query.all() as TaskEntity[];
    if (!data || data.length === 0) {
      console.log("You don't have tasks!");
      return;
    }
    console.table(data);
  } catch (error) {
    console.log("Error al listar");
  } finally {
    db.close();
  }
}

export async function listTaskPending() {
  try {
    const query = db.query("select * from tasks where status = 'pending';");
    const data = query.all() as TaskEntity[];
    if (!data || data.length === 0) {
      console.log("You don't have tasks in pending!");
      return;
    }
    console.table(data);
  } catch (error) {
    console.log("Error al listar");
  } finally {
    db.close();
  }
}

export async function listTaskInProgress() {
  try {
    const query = db.query("select * from tasks where status = 'in_progress';");
    const data = query.all() as TaskEntity[];
    if (!data || data.length === 0) {
      console.log("You don't have tasks in progress!");
      return;
    }
    console.table(data);
  } catch (error) {
    console.log("Error al listar");
  } finally {
    db.close();
  }
}

export async function listTaskDone() {
  try {
    const query = db.query("select * from tasks where status = 'done';");
    const data = query.all() as TaskEntity[];
    if (!data || data.length === 0) {
      console.log("You don't have tasks done!");
      return;
    }
    console.table(data);
  } catch (error) {
    console.log("Error al listar");
  } finally {
    db.close();
  }
}
