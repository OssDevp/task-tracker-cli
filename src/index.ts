#!/usr/bin/env bun
import {
  addTask,
  deleteTask,
  getTaskById,
  listTaskDone,
  listTaskInProgress,
  listTaskPending,
  listTasks,
  updateStatusDone,
  updateStatusInProgress,
  updateTask,
  helpMap,
} from "./command/index.ts";
import { TaskEntity } from "./model/task.ts";
import { TaskStatus } from "./util/StatusEnum.ts";
import { intro, select } from "@clack/prompts";

const args = process.argv.slice(2);

function init() {
  if (!args.length) {
    console.log("No command provided");
    return;
  }

  const command = args[0] as string;

  switch (command) {
    case "add":
      if (!args[1]) {
        return console.error("no puede estar vacion");
      }
      const task = new TaskEntity(args[1]);
      addTask(task);
      return;
    case "list":
      if (args[1] === TaskStatus.pending) {
        return listTaskPending();
      }

      if (args[1] === TaskStatus.in_progress) {
        return listTaskInProgress();
      }

      if (args[1] === TaskStatus.done) {
        return listTaskDone();
      }

      listTasks();
      return;
    case "show":
      const taskId = args[1];
      if (!taskId) {
        return console.error("ID not found");
      }
      getTaskById(taskId);
      return;
    case "update":
      const idTask = args[1];
      const description = args[2];

      return idTask && description
        ? updateTask(idTask, description)
        : console.error("ID and Description is necesary");
    case "mark":
      if (args[1] === "in_progress") {
        const id = args[2];
        return id ? updateStatusInProgress(id) : console.error("ID not found");
      }
      if (args[1] === "done") {
        const id = args[2];
        return id ? updateStatusDone(id) : console.error("ID not found");
      }
      return console.log("Command don't exist", args);
    case "delete":
      const id = args[1];
      if (!id) {
        return console.log("ID not found");
      }
      deleteTask(id);
      return;
    case "help":
      helpMap();
      break;
    default:
      console.log("No command provided:", command);
      break;
  }
}

init();
