export enum Env {
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export const ENV: Env = (process.env.NEXT_PUBLIC_ENV as Env) || Env.development
