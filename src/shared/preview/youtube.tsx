import YouTube from 'react-youtube';

function getVideoId(url: string) {
  const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  return regex.exec(url)[3];
}

export default function YoutubePreview({ url, size }: { url: string; size: string }) {
  const id = getVideoId(url);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`relative mt-2 flex flex-col overflow-hidden rounded-lg ${size === 'large' ? 'w-4/5' : 'w-2/3'}`}
    >
      <YouTube videoId={id} className="aspect-video xl:w-2/3" opts={{ width: '100%', height: '100%' }} />
    </div>
  );
}