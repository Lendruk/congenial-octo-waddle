import sqlite3 from "sqlite3";

export const convertHydrusDb = async () => {
  const db = new sqlite3.Database("../../resources/db.db");

  // db.serialize(() => {});

  return await Promise.resolve();
};
