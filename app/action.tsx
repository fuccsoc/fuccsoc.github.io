"use sever";

import { unstable_cache } from "next/cache";

export const receiveData = unstable_cache(async () => {
  return new Date().toISOString();
}, ["action"]);
