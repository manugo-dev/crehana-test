import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
  initReactI18next: {
    type: '3rdParty',
    init: () => {}
  },
  useTranslation: () => ({
    t: (key: string, params: Record<string, string>) => (params ? `${key} ${JSON.stringify(params)}` : key),
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en'
    }
  })
}));

jest.mock('i18next', () => ({
  addResources: jest.fn(),
  use: () => ({ init: jest.fn() })
}));

Object.defineProperty(window, 'location', {
  value: { assign: jest.fn() }
});
