import i18n from 'i18next';

export const getThItems = (activeTab: number) => {
  const items = [
    { id: 1, label: i18n.t('customerList:row') },
    { id: 2, label: i18n.t('customerList:first_name') },
    { id: 3, label: i18n.t('customerList:last_name') },
    { id: 4, label: i18n.t('customerList:mobile') },
    { id: 5, label: i18n.t('customerList:introduction_date') },
    { id: 6, label: i18n.t('customerList:expiration_date') },
  ];

  if (activeTab === 1) {
    items.push({
      id: 7,
      label: i18n.t('customerList:status'),
    });
  }

  items.push({
    id: 8,
    label: i18n.t('customerList:actions'),
  });

  return items;
};


export const getStatusStyle = (status: number) => {
  switch (status) {
    case 0:
      return {
        label:i18n.t('customerList:initial_registration'),
        className: 'bg-blue-100 text-blue-700',
      };

    case 1:
      return {
        label: i18n.t('customerList:expired'),
        className: 'bg-orange-100 text-orange-700',
      };

    case 2:
      return {
        label: i18n.t('customerList:deleted'),
        className: 'bg-red-100 text-red-700',
      };

    case 3:
      return {
        label: i18n.t('customerList:customer'),
        className: 'bg-green-100 text-green-700',
      };

    default:
      return {
        label: '-',
        className: 'bg-gray-100 text-gray-500',
      };
  }
};