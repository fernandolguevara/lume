import { NDKEvent } from '@nostr-dev-kit/ndk';
import { useArk } from '@libs/ark/provider';
import { Note } from '..';

export function TextNote({ event }: { event: NDKEvent }) {
  const ark = useArk();
  const thread = ark.getEventThread({ tags: event.tags });

  return (
    <Note.Root>
      <Note.User pubkey={event.pubkey} time={event.created_at} className="h-14 px-3" />
      <Note.Thread thread={thread} className="mb-2" />
      <Note.TextContent content={event.content} className="min-w-0 px-3" />
      <div className="flex h-14 items-center justify-between px-3">
        <Note.Pin eventId={event.id} />
        <div className="inline-flex items-center gap-10">
          <Note.Reply eventId={event.id} rootEventId={thread?.rootEventId} />
          <Note.Reaction event={event} />
          <Note.Repost event={event} />
          <Note.Zap event={event} />
        </div>
      </div>
    </Note.Root>
  );
}
