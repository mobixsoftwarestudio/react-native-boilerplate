import { by, device, expect, element } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show hello message', async () => {
    await expect(element(by.text('hello'))).toBeVisible();
  });

  it('should not show farewell message', async () => {
    await expect(element(by.text('farewell'))).not.toBeVisible();
  });
});
