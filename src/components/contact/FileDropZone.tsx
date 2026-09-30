import { CircleAlert, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { DragEvent } from 'react';

import { contact } from '@/i18n/contact';
import { useT } from '@/stores/languageStore';

const ACCEPTED_EXTENSIONS = [
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.ai',
  '.eps',
  '.doc',
  '.docx',
  '.psd',
];
const ACCEPT = ACCEPTED_EXTENSIONS.join(',');

function isAcceptedFile(file: File) {
  const name = file.name.toLowerCase();
  return ACCEPTED_EXTENSIONS.some((extension) => name.endsWith(extension));
}

type Notice = { kind: 'unsupported'; fileName: string } | { kind: 'oneFileOnly' };

type FileDropZoneProps = {
  id: string;
  name: string;
  labelledBy: string;
  describedBy: string;
};

// Single-file drag-and-drop upload, synced to the hidden file input
export function FileDropZone({ id, name, labelledBy, describedBy }: FileDropZoneProps) {
  const t = useT(contact);
  const inputRef = useRef<HTMLInputElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<File>();
  const [notice, setNotice] = useState<Notice>();
  const [drag, setDrag] = useState<'page' | 'zone'>();
  const fileName = file?.name;

  // Track page-wide vs in-zone drag state
  useEffect(() => {
    let depth = 0;

    function isFileDrag(event: globalThis.DragEvent) {
      return event.dataTransfer?.types.includes('Files') ?? false;
    }

    function endDrag() {
      depth = 0;
      setDrag(undefined);
    }

    function handleDragEnter(event: globalThis.DragEvent) {
      if (isFileDrag(event)) depth += 1;
    }

    function handleDragLeave(event: globalThis.DragEvent) {
      if (!isFileDrag(event)) return;
      depth = Math.max(0, depth - 1);
      if (depth === 0) setDrag(undefined);
    }

    function handleDragOver(event: globalThis.DragEvent) {
      if (!isFileDrag(event) || !event.dataTransfer) return;

      event.preventDefault();
      const overZone = zoneRef.current?.contains(event.target as Node) ?? false;
      if (!overZone) event.dataTransfer.dropEffect = 'none';
      setDrag(overZone ? 'zone' : 'page');
    }

    function handleWindowDrop(event: globalThis.DragEvent) {
      if (!isFileDrag(event)) return;
      event.preventDefault();
      endDrag();
    }

    window.addEventListener('dragenter', handleDragEnter);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleWindowDrop);
    window.addEventListener('dragend', endDrag);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleWindowDrop);
      window.removeEventListener('dragend', endDrag);
    };
  }, []);

  // Apply a picked or dropped file, rejecting unsupported types
  function takeFile(candidate?: File, droppedSeveral = false) {
    const input = inputRef.current;
    if (!input) return;

    const rejected = candidate && !isAcceptedFile(candidate);
    const kept = rejected ? file : candidate;

    const transfer = new DataTransfer();
    if (kept) transfer.items.add(kept);
    input.files = transfer.files;

    setFile(kept);
    if (rejected) setNotice({ kind: 'unsupported', fileName: candidate.name });
    else setNotice(droppedSeveral ? { kind: 'oneFileOnly' } : undefined);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    const { files } = event.dataTransfer;
    if (files[0]) takeFile(files[0], files.length > 1);
  }

  function clearNotice() {
    setNotice(undefined);
  }

  function removeFile() {
    takeFile();
    inputRef.current?.focus();
  }

  return (
    <div
      ref={zoneRef}
      data-drag={drag}
      onDragEnter={clearNotice}
      onDrop={handleDrop}
      className="relative flex h-27.75 flex-col items-center justify-center bg-dropzone px-3 text-center text-xs outline-2 outline-offset-2 outline-transparent outline-dashed transition-[outline-color,box-shadow,background-color] duration-150 ease-out motion-reduce:transition-none data-[drag=page]:outline-accent data-[drag=zone]:bg-[color-mix(in_srgb,var(--color-icon-accent)_12%,var(--color-dropzone))] data-[drag=zone]:shadow-[0_0_10px_2px_var(--color-icon-accent)] data-[drag=zone]:outline-icon-accent"
    >
      <label className="absolute inset-0 cursor-pointer has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus">
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="file"
          accept={ACCEPT}
          aria-labelledby={labelledBy}
          aria-describedby={describedBy}
          onClick={clearNotice}
          onChange={(event) => takeFile(event.target.files?.[0])}
          className="sr-only"
        />
      </label>

      {drag === 'zone' ? (
        <span>{t.dropHere}</span>
      ) : (
        <span>
          <span className="text-accent">{t.chooseFile}</span> {t.orDropHere}
        </span>
      )}

      {/* Selected file chip */}
      <div
        className={`pointer-events-none relative flex max-w-full items-center ${fileName ? 'mt-2 gap-1 rounded-sm bg-background pl-2' : ''}`}
      >
        <span aria-live="polite" className="truncate">
          {fileName && (
            <>
              <span className="sr-only">{t.selectedFile} </span>
              {fileName}
            </>
          )}
        </span>

        {fileName && (
          <button
            type="button"
            onClick={removeFile}
            aria-label={`${t.removeFile} ${fileName}`}
            className="pointer-events-auto relative flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-sm text-muted-foreground transition-[color,filter,scale] duration-300 ease-in before:absolute before:-inset-3 hover:text-foreground hover:drop-shadow-[0_0_6px_var(--color-icon-accent)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus active:scale-90 lg:before:-inset-2"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Validation message */}
      <span
        aria-live="polite"
        className={`line-clamp-2 max-w-full text-error wrap-anywhere ${notice ? 'mt-2' : ''}`}
      >
        {notice && (
          <>
            <CircleAlert size={16} aria-hidden="true" className="mr-1 inline-block align-[-3px]" />
            {notice.kind === 'unsupported'
              ? `${t.unsupportedFile} ${notice.fileName}`
              : t.oneFileOnly}
          </>
        )}
      </span>
    </div>
  );
}
