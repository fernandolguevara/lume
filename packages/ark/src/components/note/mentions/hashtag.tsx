import { WIDGET_KIND } from "@lume/utils";
import { useWidget } from "../../../hooks/useWidget";

export function Hashtag({ tag }: { tag: string }) {
	const { addWidget } = useWidget();

	return (
		<button
			type="button"
			onClick={() =>
				addWidget.mutate({
					kind: WIDGET_KIND.hashtag,
					title: tag,
					content: tag.replace("#", ""),
				})
			}
			className="cursor-default break-all text-blue-500 hover:text-blue-600"
		>
			{tag}
		</button>
	);
}