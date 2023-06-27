import { fetchCaptionsFromBaseUrl } from './fetchCaptionsFromBaseUrl'
import { fetchYoutubeVideoPageAsText } from './fetchYoutubeVideoPageAsText'
import { findCaptionTracksLineInYoutubeVideoPage } from './findCaptionTracksInYoutubePageText'

export const getYoutubeVideoCaptions = async (
  youtubeVideoId: string
): Promise<string[]> => {
  try {
    const youtubeVideoPagetext = await fetchYoutubeVideoPageAsText(
      youtubeVideoId
    )

    const [captionTrack] = await findCaptionTracksLineInYoutubeVideoPage(
      youtubeVideoPagetext
    )

    const captions = await fetchCaptionsFromBaseUrl(captionTrack.baseUrl)

    return captions
  } catch (e) {
    console.log('e', JSON.stringify(e, null, 2))
    throw new Error('Something went wrong while getting captions from video')
  }
}
