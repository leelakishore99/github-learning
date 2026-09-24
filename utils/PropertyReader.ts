// @ts-ignore
import * as fs from 'fs';

export function getConfig() {
  // 1. Read the file directly from your root directory
  const fileContent = fs.readFileSync('config.properties', 'utf-8');

  // 2. Split the text into individual lines
  const lines = fileContent.split('\n');

  // 3. Create our empty container object
  const config: any = {};

  // 4. Loop through each line and separate key/value by the '=' sign
  for (const line of lines) {
    const parts = line.split('=');
    const key = parts[0];   // The part BEFORE the '='
    const value = parts[1]; // The part AFTER the '='

    if (key && value) {
      config[key.trim()] = value.trim(); // .trim() removes hidden spaces
    }
  }

  return config;
}