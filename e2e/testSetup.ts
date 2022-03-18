/* eslint-disable @typescript-eslint/no-var-requires */
import { cleanup, init } from 'detox';

const config = require('../package.json').detox;
// eslint-disable-next-line import/order
const adapter = require('detox/runners/jest/adapter');

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config, { initGlobals: false });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
