export type Emirate =
  | 'abu-dhabi'
  | 'dubai'
  | 'sharjah'
  | 'ajman'
  | 'umm-al-quwain'
  | 'ras-al-khaimah'
  | 'fujairah';

export type PrivatePlateValue = {
  emirate: Emirate;
  code?: string;
  number: string;
};

export type EmirateConfig = {
  id: Emirate;
  label: string;
  labelAr: string;
  /** Available letter codes for private plates in this emirate */
  codes: string[];
  /** Maximum digits allowed for the plate number */
  maxDigits: number;
  /** Visual theme key used by PlatePreview */
  theme: string;
};

export type UaePlatePickerProps = {
  value?: PrivatePlateValue;
  defaultValue?: PrivatePlateValue;
  onChange?: (value: PrivatePlateValue) => void;
  disabled?: boolean;
  className?: string;
  /** Show the live plate preview above the form controls */
  showPreview?: boolean;
};

export type PlatePreviewProps = {
  value: PrivatePlateValue;
  className?: string;
  /** Optional custom plate background image with text overlay */
  backgroundImage?: string;
};
