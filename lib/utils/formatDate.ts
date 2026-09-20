import siteMetadata from '@/data/siteMetadata';

const formatDate = (date: string, options: Intl.DateTimeFormatOptions = {}) => {
  const [year, month, day] = date.slice(0, 10).split('-').map(Number);
  const utcNoon = new Date(Date.UTC(year, month - 1, day, 12));

  const now = utcNoon.toLocaleDateString(siteMetadata.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Los_Angeles',
    ...options,
  });

  return now;
};

export default formatDate;
