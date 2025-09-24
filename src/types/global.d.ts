// Polyfill for fetch in React Native
declare global {
  function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

export {};