type experience = {
  type: string;
  isSelected: boolean;
};

export const experienceLvl: experience[] = [
  {
    type: 'All',
    isSelected: true,
  },
  {
    type: 'Junior',
    isSelected: false,
  },
  {
    type: 'Mid',
    isSelected: false,
  },
  {
    type: 'Senior',
    isSelected: false,
  },
];
