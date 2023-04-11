import { UserDocument } from './models'

import PouchDB from 'pouchdb'

const db = new PouchDB<UserDocument>('db');

export default db
