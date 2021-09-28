type employment = {
  type: string;
  isSelected: boolean;
};

export const employmentType: employment[] = [
  {
    type: 'All',
    isSelected: true,
  },
  {
    type: 'B2B',
    isSelected: false,
  },
  {
    type: 'Permanent',
    isSelected: false,
  },
  {
    type: 'Mandate contract',
    isSelected: false,
  },
];
