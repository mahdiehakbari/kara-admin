/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Dentalit brand tokens */
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-light': 'var(--primary-light)',
        'secondary-green': 'var(--secondary-green)',
        'secondary-green-hover': 'var(--secondary-green-hover)',
        background: 'var(--background)',
        surface: 'var(--surface)',

        /* Existing tokens — now pointing to brand vars */
        'second-primary': 'var(--second-primary)',
        'second-primary-hover': 'var(--second-primary-hover)',
        'second-primary-disabled': 'var(--second-primary-disabled)',
        'border-color-gray': 'var(--border-color-gray)',
        'text-disabled': 'var(--text-disabled)',
        'button-outline-disabled': 'var(--button-outline-disabled)',
        'error-color': 'var(--error-color)',
        'primary-border': 'var(--primary-border)',
        'light-primary': 'var(--light-primary)',
        'second-gray': 'var(--second-gray)',
        'second-border-gray': 'var(--second-border-gray)',
        'second-light-primary': 'var(--second-light-primary)',
        'second-green': 'var(--second-green)',
        'bg-gray': 'var(--bg-gray)',
        'text-gray': 'var(--text-gray)',
        'second-text-gray': 'var(--second-text-gray)',
        'border-blue': 'var(--border-blue)',
        'button-primary': 'var(--button-primary)',
        'second-blue': 'var(--second-blue)',
        'second-text-color': 'var(--second-text-color)',
        'border-color': 'var(--border-color)',
        'active-tab-color': 'var(--active-tab-color)',
        'col-bg': 'var(--col-bg)',
        'active-loan-text': 'var(--active-loan-text)',
        'gray-text-second': 'var(--gray-text-second)',
        'danger-color': 'var(--danger-color)',
        'block-color': 'var(--block-color)',
        'second-light-blue': 'var(--second-light-blue)',
        'green-color': 'var(--green-color)',
      },
    },
  },
};
