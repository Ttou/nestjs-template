import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { parse } from 'yaml'

function configFile() {
  return process.env.NODE_ENV ? `config.${process.env.NODE_ENV}.yaml` : 'config.yaml'
}

export default () => parse(readFileSync(join(process.cwd(), configFile()), 'utf-8'))
