import React, { useMemo } from 'react'
import ReactPlayer from 'react-player/lazy'
import { PortableText } from '@portabletext/react'
import YouTubePreview from './YouTubePreview'
import { PreviewProps, PreviewLayoutKey } from 'sanity'

const YouTubeVideo = ({ value }) => {
  const { url } = value
  // return useMemo(() => {
  return <ReactPlayer url={url} />
  // }, [url])
}

const components = {
  types: {
    youtube: YouTubeVideo,
  },
}

export default function YouTubeEmbed({ value }) {
  return <PortableText value={value} components={components} />
}
