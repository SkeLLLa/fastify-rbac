import {FastifyInstance, Plugin} from 'fastify';
import * as http from 'http';
import fastifyPlugin from 'fastify-plugin';
import RBAC from 'fast-rbac';

declare module 'fastify' {
  interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    /**
     * RBAC interface
     */
    rbac: typeof RBAC;
  }

  interface FastifyRequest<HttpRequest, Query, Params, Headers, Body> {
    session?: {[key: string]: any};
  }
}

/**
 * Fastify RBAC plugin
 */
const fastifyRBACPlugin: Plugin<
  http.Server,
  http.IncomingMessage,
  http.ServerResponse,
  RBAC.Options
> = async function fastifyMetrics(
  fastify: FastifyInstance,
  options?: RBAC.Options
) {
  const rbac = new RBAC(options);
  fastify.decorate('rbac', rbac);
  return;
};

export = fastifyPlugin(fastifyRBACPlugin, {
  fastify: '>=1.0.0',
  name: 'fastify-rbac',
});
