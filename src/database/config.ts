import { Database } from "bun:sqlite";

export const db = new Database("task_cli.sqlite");

db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id uuid not null unique,
    description varchar(150) not null,
    status varchar(50),
    createAt timestamptz,
    updateAt timestamptz
  )
`);
