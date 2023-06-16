import { ChatMessageUser } from "@app/chat/components/messages/user";
import { useDecryptMessage } from "@app/chat/hooks/useDecryptMessage";
import { MentionNote } from "@shared/notes/mentions/note";
import { ImagePreview } from "@shared/notes/preview/image";
import { VideoPreview } from "@shared/notes/preview/video";
import { parser } from "@utils/parser";
import { memo } from "react";

export const ChatMessageItem = memo(function ChatMessageItem({
	data,
	userPubkey,
	userPrivkey,
}: {
	data: any;
	userPubkey: string;
	userPrivkey: string;
}) {
	const decryptedContent = useDecryptMessage(data, userPubkey, userPrivkey);
	// if we have decrypted content, use it instead of the encrypted content
	if (decryptedContent) {
		data["content"] = decryptedContent;
	}
	// parse the note content
	const content = parser(data);

	return (
		<div className="flex h-min min-h-min w-full select-text flex-col px-5 py-3 hover:bg-black/20">
			<div className="flex flex-col">
				<ChatMessageUser pubkey={data.sender_pubkey} time={data.created_at} />
				<div className="-mt-[20px] pl-[49px]">
					<div className="whitespace-pre-line break-words text-base text-zinc-100 leading-tight">
						{content.parsed || ""}
					</div>
					{Array.isArray(content.images) && content.images.length ? (
						<ImagePreview urls={content.images} />
					) : (
						<></>
					)}
					{Array.isArray(content.videos) && content.videos.length ? (
						<VideoPreview urls={content.videos} />
					) : (
						<></>
					)}
					{Array.isArray(content.notes) && content.notes.length ? (
						content.notes.map((note: string) => (
							<MentionNote key={note} id={note} />
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
});
