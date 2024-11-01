import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { parse } from 'yaml'

export default () => parse(readFileSync(join(process.cwd(), 'config.yaml'), 'utf-8'))
