import { NDKEvent, NDKKind } from "@nostr-dev-kit/ndk";
import { Note } from "..";
import { useEvent } from "../../../hooks/useEvent";
import { useArk } from "../../../provider";

export function ThreadNote({ eventId }: { eventId: string }) {
	const ark = useArk();
	const { isLoading, data } = useEvent(eventId);

	const renderEventKind = (event: NDKEvent) => {
		const thread = ark.getEventThread({ tags: data.tags });
		switch (event.kind) {
			case NDKKind.Text:
				return (
					<>
						<Note.Thread thread={thread} className="mb-2" />
						<Note.TextContent content={data.content} className="min-w-0 px-3" />
					</>
				);
			case NDKKind.Article:
				return <Note.ArticleContent eventId={event.id} tags={event.tags} />;
			case 1063:
				return <Note.MediaContent tags={event.tags} />;
			default:
				return (
					<Note.TextContent content={data.content} className="min-w-0 px-3" />
				);
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Note.Root>
			<Note.User
				pubkey={data.pubkey}
				time={data.created_at}
				variant="thread"
				className="h-16 px-3"
			/>
			{renderEventKind(data)}
			<div className="flex h-14 items-center justify-between px-3">
				<Note.Pin eventId={data.id} />
				<div className="inline-flex items-center gap-10">
					<Note.Reply eventId={data.id} />
					<Note.Reaction event={data} />
					<Note.Repost event={data} />
					<Note.Zap event={data} />
				</div>
			</div>
		</Note.Root>
	);
}