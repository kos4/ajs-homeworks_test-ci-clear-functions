import getHealth from '../character';

test.each([
  ['Маг', 90, 'healthy'],
  ['Лук', 40, 'wounded'],
  ['Танк', 10, 'critical'],
])('getHealth get status health %s lvl hp %i', (name, health, expected) => {
  const statusHealth = getHealth({ name, health });

  expect(statusHealth).toBe(expected);
});
