const clean = (value?: string) => value?.trim() || undefined;

export const links = {
  linkedIn: clean(import.meta.env.VITE_LINKEDIN_URL),
  email: clean(import.meta.env.VITE_CONTACT_EMAIL),
  calendly: clean(import.meta.env.VITE_CALENDLY_URL),
};

export const getMailtoLink = (subject?: string) => {
  if (!links.email) {
    return undefined;
  }

  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${links.email}${params}`;
};

