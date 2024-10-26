import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./Config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://CarVerseProd_owner:ZqwCzf8YIk0X@ep-green-base-a53zfwla.us-east-2.aws.neon.tech/CarVerseProd?sslmode=require',
  },
//   verbose: true,
//   strict: true,
})