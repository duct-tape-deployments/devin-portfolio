import { ChevronRight } from 'lucide-react';
import { useId } from 'react';
import type { ReactNode, SubmitEvent } from 'react';

import { ContactHeaderArt } from '@/components/contact/ContactHeaderArt';
import { FileDropZone } from '@/components/contact/FileDropZone';
import { PageContainer } from '@/components/layout/PageContainer';
import { contact } from '@/i18n/contact';
import { useT } from '@/stores/languageStore';

const fieldClasses =
  'bg-field px-3 text-body focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

const labelClasses =
  'block w-fit bg-gradient-text bg-clip-text font-display text-label font-bold text-transparent';

type RequiredFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

function RequiredField({ id, label, children }: RequiredFieldProps) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id} className={labelClasses}>
        {label}
        <span aria-hidden="true">*</span>
      </label>
      {children}
    </div>
  );
}

function Contact() {
  const t = useT(contact);
  const id = useId();

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send the form
  }

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <picture>
          <source srcSet="/images/contact-background.avif" type="image/avif" />
          <img
            src="/images/contact-background.jpg"
            alt=""
            width={1200}
            height={1600}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-photo-scrim" />
      </div>

      <PageContainer className="relative pt-2.5 pb-16 lg:pb-24">
        <div className="md:grid md:grid-cols-8 md:gap-x-5 lg:grid-cols-12 lg:gap-x-6">
          <div className="md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <header className="relative mb-8 min-h-33.25">
              <h1 className="title-gradient relative z-10 uppercase">{t.title}</h1>
              <ContactHeaderArt className="absolute top-2.5 right-1.25" />
            </header>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-md bg-background p-5 shadow-card"
            >
              <RequiredField id={`${id}-name`} label={t.name}>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={`${fieldClasses} h-10`}
                />
              </RequiredField>

              <RequiredField id={`${id}-email`} label={t.email}>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`${fieldClasses} h-10`}
                />
              </RequiredField>

              <RequiredField id={`${id}-message`} label={t.message}>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  required
                  className={`${fieldClasses} h-35.75 resize-y py-2`}
                />
              </RequiredField>

              {/* File upload field */}
              <div className="flex flex-col gap-4">
                <div>
                  <span id={`${id}-file-label`} className={labelClasses}>
                    {t.upload}
                  </span>
                  <p id={`${id}-file-formats`} className="text-center text-xs tracking-[-0.04em]">
                    {t.supportedFiles}
                  </p>
                </div>

                <FileDropZone
                  id={`${id}-file`}
                  name="file"
                  labelledBy={`${id}-file-label`}
                  describedBy={`${id}-file-formats`}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {t.send}
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Contact;
