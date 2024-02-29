import { useArk, useProfile } from "@lume/ark";
import { displayNpub } from "@lume/utils";

export function MentionUser({ pubkey }: { pubkey: string }) {
  const ark = useArk();
  const { isLoading, isError, profile } = useProfile(pubkey);

  return (
    <button
      type="button"
      onClick={() => ark.open_profile(pubkey)}
      className="break-words text-start text-blue-500 hover:text-blue-600"
    >
      {isLoading
        ? "@anon"
        : isError
          ? displayNpub(pubkey, 16)
          : `@${profile?.name || profile?.display_name || profile?.name || "anon"}`}
    </button>
  );
}
