import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
// const sql = neon(process.env.VITE_CarVerse_Database_KEY!);
const sql = neon("postgresql://CarVerseProd_owner:ZqwCzf8YIk0X@ep-green-base-a53zfwla.us-east-2.aws.neon.tech/CarVerseProd?sslmode=require");

export const db = drizzle(sql, { schema });
