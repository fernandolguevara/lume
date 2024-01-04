import { NDKEvent, NDKKind } from "@nostr-dev-kit/ndk";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Note } from "..";
import { useEvent } from "../../../hooks/useEvent";

export const MentionNote = memo(function MentionNote({
	eventId,
	openable = true,
}: { eventId: string; openable?: boolean }) {
	const { isLoading, isError, data } = useEvent(eventId);

	const renderKind = (event: NDKEvent) => {
		switch (event.kind) {
			case NDKKind.Text:
				return <Note.TextContent content={event.content} />;
			case NDKKind.Article:
				return <Note.ArticleContent eventId={event.id} tags={event.tags} />;
			case 1063:
				return <Note.MediaContent tags={event.tags} />;
			default:
				return <Note.TextContent content={event.content} />;
		}
	};

	if (isLoading) {
		return (
			<div
				contentEditable={false}
				className="w-full p-3 my-1 rounded-lg cursor-default bg-neutral-100 dark:bg-neutral-900"
			>
				Loading
			</div>
		);
	}

	if (isError) {
		return (
			<div
				contentEditable={false}
				className="w-full p-3 my-1 rounded-lg cursor-default bg-neutral-100 dark:bg-neutral-900"
			>
				Failed to fetch event
			</div>
		);
	}

	return (
		<Note.Provider event={data}>
			<Note.Root className="flex flex-col w-full gap-1 my-1 rounded-lg cursor-default bg-neutral-100 dark:bg-neutral-900">
				<div className="px-3 mt-3">
					<Note.User variant="mention" />
				</div>
				<div className="px-3 pb-3 mt-1">
					{renderKind(data)}
					{openable ? (
						<Link
							to={`/events/${data.id}`}
							className="mt-2 text-blue-500 hover:text-blue-600"
						>
							Show more
						</Link>
					) : null}
				</div>
			</Note.Root>
		</Note.Provider>
	);
});
