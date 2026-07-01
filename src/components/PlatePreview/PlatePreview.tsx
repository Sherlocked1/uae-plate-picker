import type { ComponentType } from 'react';
import type { Emirate, PlatePreviewProps } from '../../types';
import { getEmirateConfig } from '../../data/emirates';
import { AbuDhabiPlateSvg } from './AbuDhabiPlateSvg';
import { AjmanPlateSvg } from './AjmanPlateSvg';
import { DubaiPlateSvg } from './DubaiPlateSvg';
import { SharjahPlateSvg } from './SharjahPlateSvg';
import { RasAlKhaimahPlateSvg } from './RasAlKhaimahPlateSvg';
import { FujairahPlateSvg } from './FujairahPlateSvg';
import { UmmAlQuwainPlateSvg } from './UmmAlQuwainPlateSvg';
import styles from './PlatePreview.module.css';

type PlateSvgProps = {
  code: string;
  number: string;
  className?: string;
};

const EMIRATE_PLATE_COMPONENTS: Record<Emirate, ComponentType<PlateSvgProps>> = {
  'abu-dhabi': AbuDhabiPlateSvg,
  dubai: DubaiPlateSvg,
  sharjah: SharjahPlateSvg,
  ajman: AjmanPlateSvg,
  'umm-al-quwain': UmmAlQuwainPlateSvg,
  'ras-al-khaimah': RasAlKhaimahPlateSvg,
  fujairah: FujairahPlateSvg,
};

export function PlatePreview({ value, className, backgroundImage }: PlatePreviewProps) {
  const config = getEmirateConfig(value.emirate);
  const displayCode = value.code ?? '';
  const displayNumber = value.number || '';

  if (backgroundImage) {
    return (
      <div
        className={[styles.imagePlate, className].filter(Boolean).join(' ')}
        role="img"
        aria-label={`${config.label} private plate ${displayCode || '—'} ${displayNumber || '—'}`}
        data-emirate={value.emirate}
      >
        <img src={backgroundImage} alt="" aria-hidden="true" className={styles.plateImage} />
        <div className={styles.overlay}>
          <span
            className={[styles.codeOverlay, !displayCode && styles.placeholder].filter(Boolean).join(' ')}
          >
            {displayCode || '—'}
          </span>
          <span
            className={[styles.numberOverlay, !displayNumber && styles.placeholder].filter(Boolean).join(' ')}
          >
            {displayNumber || '00000'}
          </span>
        </div>
      </div>
    );
  }

  const PlateSvg = EMIRATE_PLATE_COMPONENTS[value.emirate];

  return (
    <div
      className={[styles.imagePlate, className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`${config.label} private plate ${displayCode || '—'} ${displayNumber || '00000'}`}
      data-emirate={value.emirate}
    >
      <PlateSvg
        code={displayCode || '—'}
        number={displayNumber || '00000'}
        className={styles.plateImage}
      />
    </div>
  );
}
