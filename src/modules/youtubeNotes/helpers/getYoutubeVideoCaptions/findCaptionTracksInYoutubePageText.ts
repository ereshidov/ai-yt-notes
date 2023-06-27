import { CAPTIONS_TRACKS, captionsTracksRegExp } from '../../constants'
import { type CaptionTrack } from './types'

export const findCaptionTracksLineInYoutubeVideoPage = async (
  text: string
): Promise<CaptionTrack[]> => {
  const [captionsTracksString] = captionsTracksRegExp.exec(text) as string[]
  const [, captionTrackUrls] = captionsTracksString.split(CAPTIONS_TRACKS)
  return JSON.parse(captionTrackUrls) as CaptionTrack[]
}
