import { useCallback } from 'react';
import type { Emirate, UaePlatePickerProps } from '../../types';
import {
  DEFAULT_PLATE_VALUE,
  EMIRATES,
  getDefaultCodeForEmirate,
  getEmirateConfig,
} from '../../data/emirates';
import { PlatePreview } from '../PlatePreview/PlatePreview';
import { sanitizePlateNumber, useControllableState } from '../../utils';
import styles from './UaePlatePicker.module.css';

export function UaePlatePicker({
  value,
  defaultValue = DEFAULT_PLATE_VALUE,
  onChange,
  disabled = false,
  className,
  showPreview = true,
}: UaePlatePickerProps) {
  const [plateValue, setPlateValue] = useControllableState({
    value,
    defaultValue,
    onChange,
  });

  const emirateConfig = getEmirateConfig(plateValue.emirate);

  const handleEmirateChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const emirate = event.target.value as Emirate;
      const nextCode = getDefaultCodeForEmirate(emirate);
      setPlateValue((prev) => ({
        ...prev,
        emirate,
        code: nextCode,
      }));
    },
    [setPlateValue],
  );

  const handleCodeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPlateValue((prev) => ({
        ...prev,
        code: event.target.value,
      }));
    },
    [setPlateValue],
  );

  const handleNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const number = sanitizePlateNumber(event.target.value, emirateConfig.maxDigits);
      setPlateValue((prev) => ({
        ...prev,
        number,
      }));
    },
    [emirateConfig.maxDigits, setPlateValue],
  );

  return (
    <div className={[styles.picker, className].filter(Boolean).join(' ')}>
      {showPreview ? (
        <div className={styles.previewSection} aria-live="polite">
          <PlatePreview value={plateValue} />
        </div>
      ) : null}

      <fieldset className={styles.controls} disabled={disabled}>
        <legend className={styles.srOnly}>UAE private plate details</legend>

        <div className={[styles.field, styles.fieldWide].join(' ')}>
          <label className={styles.label} htmlFor="uae-plate-emirate">
            Emirate
          </label>
          <select
            id="uae-plate-emirate"
            className={styles.select}
            value={plateValue.emirate}
            onChange={handleEmirateChange}
            disabled={disabled}
          >
            {EMIRATES.map((emirate) => (
              <option key={emirate.id} value={emirate.id}>
                {emirate.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="uae-plate-code">
            Code
          </label>
          <select
            id="uae-plate-code"
            className={styles.select}
            value={plateValue.code ?? ''}
            onChange={handleCodeChange}
            disabled={disabled}
          >
            {emirateConfig.codes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="uae-plate-number">
            Number
          </label>
          <input
            id="uae-plate-number"
            className={styles.input}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter plate number"
            value={plateValue.number}
            onChange={handleNumberChange}
            disabled={disabled}
            maxLength={emirateConfig.maxDigits}
            aria-describedby="uae-plate-number-hint"
          />
          <span id="uae-plate-number-hint" className={styles.hint}>
            Up to {emirateConfig.maxDigits} digits
          </span>
        </div>
      </fieldset>
    </div>
  );
}
