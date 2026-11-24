import type { ComponentProps } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

type ZoomableLightboxProps = ComponentProps<typeof Lightbox>;

export default function ZoomableLightbox(props: ZoomableLightboxProps) {
  return <Lightbox {...props} plugins={[Zoom]} zoom={{ scrollToZoom: true }} />;
}
