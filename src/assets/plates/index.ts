import type { Emirate } from '../../types';
import ajmanPlate from './ajman.png';
import fujairahPlate from './fujairah.png';
import rasAlKhaimahPlate from './ras_al_khaimah.png';
import ummAlQuwainPlate from './umm_al_quwain.png';

export const PLATE_IMAGES: Partial<Record<Emirate, string>> = {
  ajman: ajmanPlate,
  'umm-al-quwain': ummAlQuwainPlate,
  'ras-al-khaimah': rasAlKhaimahPlate,
  fujairah: fujairahPlate,
};
