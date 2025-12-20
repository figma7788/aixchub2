import React from 'react';
import { AMAPoster } from './AMAPoster';

export const Playground = () => {
  return (
    <div className="relative w-full min-h-[85vh] overflow-y-auto rounded-[7px] bg-black/20 p-8">
      <div className="text-neutral-500 font-mono text-sm mb-4">Playground Area</div>
      <AMAPoster />
    </div>
  );
};
