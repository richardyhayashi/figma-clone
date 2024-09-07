'use client';

import { ReactNode } from 'react';
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from '@liveblocks/react/suspense';

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      publicApiKey={
        'pk_dev_80wLFcO7kzoZ12zIAMbwP7m5mETQRIwvfID2RMKTLsni6V2MKU56xZyboMdedSy0'
      }
    >
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
