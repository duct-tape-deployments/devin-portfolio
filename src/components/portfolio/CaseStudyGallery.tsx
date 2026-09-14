import { useState } from 'react';

type CaseStudyGalleryProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const columns =
    images.length >= 4 ? 'grid-cols-4' : images.length === 3 ? 'grid-cols-3' : 'grid-cols-2';

  return (
    <>
      <div className={`grid gap-3 ${columns}`}>
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-2xl text-foreground"
            aria-label="Close enlarged image"
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[95vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
