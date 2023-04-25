import PouchDB from "pouchdb/modules/pouchdb/mod.ts";

export interface Crypto {
    _id: string;
    _userId: string;
    title: string;
    key: string;
    qrCode: string;
}

export interface User {
    _id: string;
    username: string;
    password: string;
    session: string;
    crypto: Crypto[];
}


const db = new PouchDB("./db", { adapter: "idb" })

export default db;
