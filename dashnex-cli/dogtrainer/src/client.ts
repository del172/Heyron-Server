'use client'

// Use this file to configure DashNex Client

import type { ModuleConfig } from '@dashnex/types';
import packageJson from '../package.json' with { type: "json" };

export default {
  name: packageJson.name,
  version: packageJson.version,
  pages: [],
  listeners: [],
} as ModuleConfig;
