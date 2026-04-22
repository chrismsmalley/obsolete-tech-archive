import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Newsletter Not Available | Obsolete Tech Archive',
  description: 'The newsletter archive is temporarily unavailable.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewsletterPage() {
  notFound();
}
