import type { Emirate, EmirateConfig } from '../types';
import { PLATE_IMAGES } from '../assets/plates';

export const EMIRATES: EmirateConfig[] = [
  {
    id: 'abu-dhabi',
    label: 'Abu Dhabi',
    labelAr: 'أبوظبي',
    codes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '50'],
    maxDigits: 5,
    theme: 'abu-dhabi',
    backgroundImage: PLATE_IMAGES['abu-dhabi'],
  },
  {
    id: 'dubai',
    label: 'Dubai',
    labelAr: 'دبي',
    codes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE'],
    maxDigits: 5,
    theme: 'dubai',
    backgroundImage: PLATE_IMAGES.dubai,
  },
  {
    id: 'sharjah',
    label: 'Sharjah',
    labelAr: 'الشارقة',
    codes: ['1', '2', '3', '4'],
    maxDigits: 5,
    theme: 'sharjah',
    backgroundImage: PLATE_IMAGES.sharjah,
  },
  {
    id: 'ajman',
    label: 'Ajman',
    labelAr: 'عجمان',
    codes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    maxDigits: 5,
    theme: 'ajman',
    backgroundImage: PLATE_IMAGES.ajman,
  },
  {
    id: 'umm-al-quwain',
    label: 'Umm Al Quwain',
    labelAr: 'أم القيوين',
    codes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    maxDigits: 5,
    theme: 'umm-al-quwain',
    backgroundImage: PLATE_IMAGES['umm-al-quwain'],
  },
  {
    id: 'ras-al-khaimah',
    label: 'Ras Al Khaimah',
    labelAr: 'رأس الخيمة',
    codes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    maxDigits: 5,
    theme: 'ras-al-khaimah',
    backgroundImage: PLATE_IMAGES['ras-al-khaimah'],
  },
  {
    id: 'fujairah',
    label: 'Fujairah',
    labelAr: 'الفجيرة',
    codes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    maxDigits: 5,
    theme: 'fujairah',
    backgroundImage: PLATE_IMAGES.fujairah,
  },
];

export const EMIRATE_MAP: Record<Emirate, EmirateConfig> = EMIRATES.reduce(
  (acc, emirate) => {
    acc[emirate.id] = emirate;
    return acc;
  },
  {} as Record<Emirate, EmirateConfig>,
);

export const DEFAULT_PLATE_VALUE = {
  emirate: 'dubai' as Emirate,
  code: 'A',
  number: '',
};

export function getEmirateConfig(emirate: Emirate): EmirateConfig {
  return EMIRATE_MAP[emirate];
}

export function getDefaultCodeForEmirate(emirate: Emirate): string {
  const config = getEmirateConfig(emirate);
  return config.codes[0] ?? '';
}
