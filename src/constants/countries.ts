export type Country = {
  code: string;
  label: string;
  lang: string;
};

const countries: Country[] = [
  { code: 'RU', label: 'Russia', lang: 'Russian' },
  { code: 'US', label: 'United States', lang: 'English (US)' },
  { code: 'GB', label: 'United Kingdom', lang: 'English (UK)' },
];
export default countries;
