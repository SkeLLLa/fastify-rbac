import 'jest';
import fastifyPlugin = require('../src/index');
import fastify from 'fastify';
import RBAC from 'fast-rbac';
const {name} = require('../package.json');

describe(name, () => {
  const app = fastify();
  test('fastify plugin registererd', async () => {
    app.register(fastifyPlugin).after((err) => {
      expect(err).toBeFalsy();
    });
    await app.ready();
    expect(app.rbac).toBeDefined();
    expect(app.rbac).toBeInstanceOf(RBAC);
    expect(app.rbac.can).toBeDefined();
  });
});
