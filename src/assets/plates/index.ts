import type { Emirate } from '../../types';
import abuDhabiPlate from './abu_dhabi.png';
import ajmanPlate from './ajman.png';
import dubaiPlate from './dubai.png';
import fujairahPlate from './fujairah.png';
import rasAlKhaimahPlate from './ras_al_khaimah.png';
import sharjahPlate from './sharjah.png';
import ummAlQuwainPlate from './umm_al_quwain.png';

export const PLATE_IMAGES: Record<Emirate, string> = {
  'abu-dhabi': abuDhabiPlate,
  dubai: dubaiPlate,
  sharjah: sharjahPlate,
  ajman: ajmanPlate,
  'umm-al-quwain': ummAlQuwainPlate,
  'ras-al-khaimah': rasAlKhaimahPlate,
  fujairah: fujairahPlate,
};
