const clean = (value?: string) => value?.trim() || undefined;

const fallbackLinkedIn =
  "https://www.linkedin.com/in/israel-philips-0ab274202";
const fallbackEmail = "israelphils.tech@gmail.com";

export const links = {
  linkedIn: clean(import.meta.env.VITE_LINKEDIN_URL) ?? fallbackLinkedIn,
  email: clean(import.meta.env.VITE_CONTACT_EMAIL) ?? fallbackEmail,
  calendly: clean(import.meta.env.VITE_CALENDLY_URL),
};

export const getMailtoLink = (subject?: string) => {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${links.email}${params}`;
};

export const getConsultationLink = () => {
  return links.calendly ?? getMailtoLink("Consultation request");
};
