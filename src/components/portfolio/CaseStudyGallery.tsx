import { useEffect, useId, useRef, useState } from 'react';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { useT } from '@/stores/languageStore';

type GalleryImage = {
  src: string;
  alt: string;
};

type CaseStudyGalleryProps = {
  images: GalleryImage[];
};

const columnClasses: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const dialogId = useId();
  const dialogTitleId = useId();
  const statusId = useId();

  const t = useT(caseStudyLabels);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const columnCount = Math.min(Math.max(images.length, 1), 4);
  const columns = columnClasses[columnCount];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (selectedIndex === null || !dialog || dialog.open) {
      return;
    }

    dialog.showModal();

    const frame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  if (images.length === 0) {
    return null;
  }

  function openImage(index: number, trigger: HTMLButtonElement) {
    openerRef.current = trigger;
    setSelectedIndex(index);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setSelectedIndex(null);

    requestAnimationFrame(() => {
      openerRef.current?.focus();
    });
  }

  function showPreviousImage() {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? images.length - 1 : current - 1;
    });
  }

  function showNextImage() {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === images.length - 1 ? 0 : current + 1;
    });
  }

  return (
    <>
      <ul className={`grid gap-2 sm:gap-3 ${columns}`}>
        {images.map((image, index) => (
          <li key={image.src} className="min-w-0">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-controls={dialogId}
              aria-label={`${t.openImage}: ${image.alt} (${index + 1}/${images.length})`}
              onClick={(event) => openImage(index, event.currentTarget)}
              className="
                block aspect-square w-full
                cursor-pointer overflow-hidden rounded-md
                shadow-glow-image
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-focus
              "
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="
                  h-full w-full object-cover
                  motion-safe:transition-transform
                  motion-safe:duration-200
                  motion-safe:hover:scale-105
                "
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={dialogTitleId}
        aria-describedby={statusId}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        onKeyDown={(event) => {
          if (selectedIndex === null) return;

          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showPreviousImage();
          }

          if (event.key === 'ArrowRight') {
            event.preventDefault();
            showNextImage();
          }

          if (event.key === 'Home') {
            event.preventDefault();
            setSelectedIndex(0);
          }

          if (event.key === 'End') {
            event.preventDefault();
            setSelectedIndex(images.length - 1);
          }
        }}
        className="
          m-auto max-h-[95dvh] max-w-[95vw]
          overflow-visible border-0 bg-transparent p-0
          text-foreground
          backdrop:bg-black/80
        "
      >
        <h2 id={dialogTitleId} className="sr-only">
          {t.imageViewer}
          {selectedImage ? `: ${selectedImage.alt}` : ''}
        </h2>

        <p id={statusId} className="sr-only" aria-live="polite">
          {selectedImage && selectedIndex !== null
            ? `${selectedImage.alt} (${selectedIndex + 1}/${images.length})`
            : ''}
        </p>

        <div className="relative flex max-h-[95dvh] max-w-[95vw] items-center justify-center">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeDialog}
            aria-label={t.closeImage}
            className="
              absolute right-2 top-2 z-20
              flex min-h-11 min-w-11
              cursor-pointer items-center justify-center
              rounded-full bg-background
              text-2xl text-foreground
              shadow-card
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-focus
            "
          >
            <span aria-hidden="true">×</span>
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={t.previousImage}
              className="
                absolute left-2 z-20
                flex min-h-11 min-w-11
                cursor-pointer items-center justify-center
                rounded-full bg-background/90
                text-2xl text-foreground
                shadow-card
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-focus
              "
            >
              <span aria-hidden="true">‹</span>
            </button>
          )}

          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="
                block max-h-[90dvh] max-w-[95vw]
                object-contain
              "
            />
          )}

          {images.length > 1 && (
            <button
              type="button"
              onClick={showNextImage}
              aria-label={t.nextImage}
              className="
                absolute right-2 z-20
                flex min-h-11 min-w-11
                cursor-pointer items-center justify-center
                rounded-full bg-background/90
                text-2xl text-foreground
                shadow-card
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-focus
              "
            >
              <span aria-hidden="true">›</span>
            </button>
          )}
        </div>
      </dialog>
    </>
  );
}
