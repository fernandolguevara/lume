import { NDKKind } from '@nostr-dev-kit/ndk';
import { useQuery } from '@tanstack/react-query';

import { RelayForm } from '@app/relays/components/relayForm';

import { useArk } from '@libs/ark';

import { CancelIcon, RefreshIcon } from '@shared/icons';

import { useRelay } from '@utils/hooks/useRelay';

export function UserRelayList() {
  const { ark } = useArk();
  const { removeRelay } = useRelay();
  const { status, data, refetch } = useQuery({
    queryKey: ['relays', ark.account.pubkey],
    queryFn: async () => {
      const event = await ark.getEventByFilter({
        filter: {
          kinds: [NDKKind.RelayList],
          authors: [ark.account.pubkey],
        },
      });

      if (!event) return [];
      return event.tags;
    },
    refetchOnWindowFocus: false,
  });

  const currentRelays = new Set([...ark.relays]);

  return (
    <div className="col-span-1">
      <div className="inline-flex h-16 w-full items-center justify-between border-b border-neutral-100 px-3 dark:border-neutral-900">
        <h3 className="font-semibold">Connected relays</h3>
        <button
          type="button"
          onClick={() => refetch()}
          className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <RefreshIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-2 px-3">
        {status === 'pending' ? (
          <p>Loading...</p>
        ) : !data.length ? (
          <div className="flex h-20 w-full items-center justify-center rounded-xl bg-neutral-50 dark:bg-neutral-950">
            <p className="text-sm font-medium">You not have personal relay list yet</p>
          </div>
        ) : (
          data.map((item) => (
            <div
              key={item[1]}
              className="group flex h-11 items-center justify-between rounded-lg bg-neutral-100 px-3 dark:bg-neutral-900"
            >
              <div className="inline-flex items-baseline gap-2">
                {currentRelays.has(item[1]) ? (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                  </span>
                ) : (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                  </span>
                )}
                <p className="max-w-[20rem] truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {item[1]}
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                {item[2]?.length ? (
                  <div className="inline-flex h-6 w-max items-center justify-center rounded bg-neutral-200 px-2 text-xs font-medium capitalize dark:bg-neutral-800">
                    {item[2]}
                  </div>
                ) : null}
                <button
                  type="button"
                  onClick={() => removeRelay.mutate(item[1])}
                  className="hidden h-6 w-6 items-center justify-center rounded group-hover:inline-flex hover:bg-neutral-300 dark:hover:bg-neutral-700"
                >
                  <CancelIcon className="h-4 w-4 text-neutral-900 dark:text-neutral-100" />
                </button>
              </div>
            </div>
          ))
        )}
        <RelayForm />
      </div>
    </div>
  );
}
