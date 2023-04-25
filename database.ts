import PouchDB from "pouchdb/modules/pouchdb/mod.ts";

export interface User {
    _id: string;
    username: string;
    password: string;
    session: string;
    crypto: Record<string, string>;
}


const db = new PouchDB("mydb", { adapter: "idb" })

export default db;
