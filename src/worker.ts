type AssetsBinding = {
  fetch(request: Request): Promise<Response>;
};

type Env = {
  ASSETS: AssetsBinding;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};
