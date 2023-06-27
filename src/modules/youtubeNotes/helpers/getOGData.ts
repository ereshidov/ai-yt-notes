import ogs from 'open-graph-scraper'
import { YOUTUBE_URL_PREFIX } from '../constants'

export interface OGData {
  title?: string
  thumbnailUrl?: string
}

export const getOGDataFromYoutubeVideo = async (
  videoId: string
): Promise<OGData> => {
  const result = await ogs({ url: `${YOUTUBE_URL_PREFIX}${videoId}` })
  if (result.error) {
    throw new Error('Something went wrong while fetching OG data')
  }
  return {
    title: result.result.ogTitle,
    thumbnailUrl: result?.result?.ogImage?.[0].url
  }
}
