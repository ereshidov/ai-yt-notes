export const CAPTIONS_TRACKS = '"captionTracks":'
export const YOUTUBE_URL_PREFIX = 'https://youtu.be/'

export const captionsTracksRegExp = new RegExp(
  `${CAPTIONS_TRACKS}\\[([\\s\\S]*?)\\]`
)
