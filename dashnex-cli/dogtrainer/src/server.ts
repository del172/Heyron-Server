
// Use this file to configure DashNex Server

import type { ModuleConfig } from '@dashnex/types';
import packageJson from '../package.json' with { type: "json" };
import dashnexConfig from '../dashnex.json' with { type: "json" };

export default {
  name: packageJson.name,
  version: packageJson.version,
  routes: [],
  listeners: [],
  ...dashnexConfig,
} as ModuleConfig;
