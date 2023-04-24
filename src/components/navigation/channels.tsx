import ChannelList from '@components/channels/channelList';

import { Disclosure } from '@headlessui/react';
import { NavArrowUp } from 'iconoir-react';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Channels() {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex flex-col px-2">
          <Disclosure.Button className="flex cursor-pointer items-center gap-1 px-1 py-1">
            <div
              className={`inline-flex h-5 w-5 transform items-center justify-center transition-transform duration-150 ease-in-out ${
                open ? 'rotate-180' : ''
              }`}
            >
              <NavArrowUp width={16} height={16} className="text-zinc-700" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">Channels</h3>
          </Disclosure.Button>
          <Disclosure.Panel>
            <Suspense fallback={<Skeleton count={2} />}>
              <ChannelList />
            </Suspense>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
