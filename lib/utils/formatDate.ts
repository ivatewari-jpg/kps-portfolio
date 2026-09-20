import siteMetadata from '@/data/siteMetadata';

const formatDate = (date: string, options: Intl.DateTimeFormatOptions = {}) => {
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Los_Angeles',
    ...options,
  });

  return now;
};

export default formatDate;
