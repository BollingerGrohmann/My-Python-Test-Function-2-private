import { writeFileSync } from 'fs'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { FunctionInputSchema } from './automateFunction.js'

const schema = zodToJsonSchema(FunctionInputSchema, {target: "jsonSchema2019-09"})

schema.$schema = "https://json-schema.org/draft/2020-12/schema"; // a ‘hacky’ workaround


const args = process.argv.slice(2)

const fileName = args[0] || 'functionInputSchema.json'

writeFileSync(fileName, JSON.stringify(schema))
