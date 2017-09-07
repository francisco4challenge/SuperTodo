import { RequestHandler, Express } from 'express';
export interface Endpoint {
  method: 'get' | 'post';
  path: string;
  handlers: RequestHandler[];
}

export function connectPlugin(
  app: Express,
  plugin: Endpoint
) {
  app[plugin.method](plugin.path, plugin.handlers);
}