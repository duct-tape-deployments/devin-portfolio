import type { Language } from '@/stores/languageStore';

type ContactStrings = {
  title: string;
  name: string;
  email: string;
  message: string;
  upload: string;
  supportedFiles: string;
  chooseFile: string;
  orDropHere: string;
  dropHere: string;
  selectedFile: string;
  removeFile: string;
  unsupportedFile: string;
  oneFileOnly: string;
  send: string;
};

export const contact: Record<Language, ContactStrings> = {
  en: {
    title: 'Contact',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    upload: 'Upload File',
    supportedFiles: 'Supported files: .png, .jpg, .svg, .ai, .eps, .doc, .docx & .psd',
    chooseFile: 'Choose file',
    orDropHere: 'or drop here',
    dropHere: 'Drop file here',
    selectedFile: 'Selected file:',
    removeFile: 'Remove',
    unsupportedFile: 'Unsupported file type:',
    oneFileOnly: 'Only one file can be uploaded.',
    send: 'Send',
  },

  no: {
    title: 'Kontakt',
    name: 'Navn',
    email: 'E-post',
    message: 'Melding',
    upload: 'Last opp fil',
    supportedFiles: 'Støttede filer: .png, .jpg, .svg, .ai, .eps, .doc, .docx og .psd',
    chooseFile: 'Velg fil',
    orDropHere: 'eller slipp den her',
    dropHere: 'Slipp filen her',
    selectedFile: 'Valgt fil:',
    removeFile: 'Fjern',
    unsupportedFile: 'Filtypen støttes ikke:',
    oneFileOnly: 'Du kan kun laste opp én fil.',
    send: 'Send',
  },
};
