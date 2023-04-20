#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { runGenClassCli } from '../gen-class.js';

try {
    const result = runGenClassCli(
        process.argv,
        { readFileSync, writeFileSync },
    );
    console.log(result);
} catch (err) {
    console.error('Error:', err.message);
    process.exit(1); // non-zero exit code indicates failure
}
