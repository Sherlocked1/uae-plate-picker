import type { PlatePreviewProps } from '../../types';
import { getEmirateConfig } from '../../data/emirates';
import styles from './PlatePreview.module.css';

const THEME_CLASS_MAP: Record<string, string> = {
  'abu-dhabi': styles.abuDhabi,
  dubai: styles.dubai,
  sharjah: styles.sharjah,
  ajman: styles.ajman,
  'umm-al-quwain': styles.ummAlQuwain,
  'ras-al-khaimah': styles.rasAlKhaimah,
  fujairah: styles.fujairah,
};

const OVERLAY_THEME_CLASS_MAP: Record<string, string> = {
  'abu-dhabi': styles.overlayAbuDhabi,
  dubai: styles.overlayDubai,
  sharjah: styles.overlaySharjah,
  ajman: styles.overlayAjman,
  'umm-al-quwain': styles.overlayUmmAlQuwain,
  'ras-al-khaimah': styles.overlayRasAlKhaimah,
  fujairah: styles.overlayFujairah,
};

export function PlatePreview({ value, className, backgroundImage }: PlatePreviewProps) {
  const config = getEmirateConfig(value.emirate);
  const themeClass = THEME_CLASS_MAP[config.theme] ?? styles.dubai;
  const overlayClass = OVERLAY_THEME_CLASS_MAP[config.theme] ?? styles.overlayDubai;
  const imageSrc = backgroundImage ?? config.backgroundImage;
  const displayCode = value.code ?? '';
  const displayNumber = value.number || '';

  if (imageSrc) {
    return (
      <div
        className={[styles.imagePlate, className].filter(Boolean).join(' ')}
        role="img"
        aria-label={`${config.label} private plate ${displayCode || '—'} ${displayNumber || '—'}`}
        data-emirate={value.emirate}
      >
        <img src={imageSrc} alt="" aria-hidden="true" className={styles.plateImage} />
        <div className={[styles.overlay, overlayClass].join(' ')}>
          <span
            className={[
              styles.codeOverlay,
              !displayCode && styles.placeholder,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {displayCode || '—'}
          </span>
          <span
            className={[
              styles.numberOverlay,
              !displayNumber && styles.placeholder,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {displayNumber || '00000'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={[styles.plate, themeClass, className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`${config.label} private plate ${displayCode || '—'} ${displayNumber || '00000'}`}
      data-emirate={value.emirate}
    >
      <div className={styles.content}>
        <div className={styles.emirateBadge}>
          <span>{config.label}</span>
          <span className={styles.emirateBadgeAr}>{config.labelAr}</span>
        </div>
        <div className={styles.plateNumber}>
          <span className={[styles.code, !displayCode && styles.placeholder].filter(Boolean).join(' ')}>
            {displayCode || '—'}
          </span>
          <span className={[styles.number, !displayNumber && styles.placeholder].filter(Boolean).join(' ')}>
            {displayNumber || '00000'}
          </span>
        </div>
      </div>
    </div>
  );
}
