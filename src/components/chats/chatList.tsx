import { ChatListItem } from '@components/chats/chatListItem';
import { ChatModal } from '@components/chats/chatModal';
import { ImageWithFallback } from '@components/imageWithFallback';

import { DEFAULT_AVATAR } from '@stores/constants';

import useLocalStorage from '@rehooks/local-storage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ChatList() {
  const router = useRouter();

  const [list, setList] = useState([]);
  const [activeAccount]: any = useLocalStorage('activeAccount', {});
  const profile = activeAccount.metadata ? JSON.parse(activeAccount.metadata) : null;

  const openSelfChat = () => {
    router.push(`/chats/${activeAccount.pubkey}`);
  };

  useEffect(() => {
    const fetchChats = async () => {
      const { getChats } = await import('@utils/bindings');
      return await getChats({ account_id: activeAccount.id });
    };

    fetchChats()
      .then((res) => setList(res))
      .catch(console.error);
  }, [activeAccount.id]);

  return (
    <div className="flex flex-col gap-px">
      <div
        onClick={() => openSelfChat()}
        className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 hover:bg-zinc-900"
      >
        <div className="relative h-5 w-5 shrink overflow-hidden rounded bg-white">
          <ImageWithFallback
            src={profile?.picture || DEFAULT_AVATAR}
            alt={activeAccount.pubkey}
            fill={true}
            className="rounded object-cover"
          />
        </div>
        <div>
          <h5 className="text-sm font-medium text-zinc-400">
            {profile?.display_name || profile?.name} <span className="text-zinc-500">(you)</span>
          </h5>
        </div>
      </div>
      {list.map((item) => (
        <ChatListItem key={item.id} pubkey={item.pubkey} />
      ))}
      <ChatModal />
    </div>
  );
}