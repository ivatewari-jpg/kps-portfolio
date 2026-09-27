export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  googlescholar = 'googlescholar',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@ivatewari',
  site: 'https://iva-tewari-silk.vercel.app', // TODO: Update
  calendly: 'https://calendly.com/ivatewari', // TODO: Update
  links: {
    github: 'https://github.com/ivatewari-jpg',
    linkedin: 'https://linkedin.com/in/iva-tewari-4a6026229',
    googlescholar: '',
    twitter: 'https://twitter.com/ivatewari', // TODO: Remove
    youtube: '',
    email: 'mailto:ivatewari@gmail.com',
    buymeacoffee: '', // TODO: Update
  },
};
