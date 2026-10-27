import { useEffect, useId, useRef, useState } from 'react';
import Icon from './Icon.jsx';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const pad = (n) => String(n).padStart(2, '0');

// Local-time ISO date (toISOString would shift to UTC and can land on the previous day in IST).
export const toISODate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const fromISODate = (s) => {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
};
export const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;

const longDate = (d) => d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
const monthLabel = (d) => d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });

/**
 * Calendar popover that posts its value as a hidden yyyy-mm-dd input.
 * Dates before `minDate` are disabled, and so are weekends unless `allowWeekends`.
 */
export default function DatePicker({ name, label, value, onChange, minDate, allowWeekends, note }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(null);
  const ref = useRef(null);
  const labelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isDisabled = (d) => !minDate || d < minDate || (!allowWeekends && isWeekend(d));

  function toggle() {
    if (!open) {
      const base = value ? fromISODate(value) : minDate || new Date();
      setView(new Date(base.getFullYear(), base.getMonth(), 1));
    }
    setOpen((o) => !o);
  }

  function pick(d) {
    onChange(toISODate(d));
    setOpen(false);
  }

  let cells = [];
  if (view) {
    const lead = (view.getDay() + 6) % 7; // weeks start on Monday
    const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    cells = [
      ...Array.from({ length: lead }, () => null),
      ...Array.from({ length: days }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1)),
    ];
  }
  const canGoBack = view && minDate && view > new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  const shift = (n) => setView((v) => new Date(v.getFullYear(), v.getMonth() + n, 1));

  return (
    <div className="field datepicker" ref={ref}>
      <span id={labelId}>{label}</span>
      <button
        type="button"
        className={`datepicker__trigger${value ? '' : ' is-empty'}`}
        aria-labelledby={labelId}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={toggle}
      >
        {value ? longDate(fromISODate(value)) : 'Choose a date'}
        <Icon name="calendar" size={20} />
      </button>
      <input type="hidden" name={name} value={value} />

      {open && view && (
        <div className="datepicker__panel" role="dialog" aria-label="Choose a date">
          <div className="datepicker__head">
            <button type="button" onClick={() => shift(-1)} disabled={!canGoBack} aria-label="Previous month">‹</button>
            <span>{monthLabel(view)}</span>
            <button type="button" onClick={() => shift(1)} aria-label="Next month">›</button>
          </div>
          <div className="datepicker__grid">
            {WEEKDAYS.map((w, i) => (
              <span key={w} className={`datepicker__dow${i > 4 && !allowWeekends ? ' is-off' : ''}`}>{w}</span>
            ))}
            {cells.map((d, i) =>
              d ? (
                <button
                  type="button"
                  key={i}
                  className={`datepicker__day${value === toISODate(d) ? ' is-selected' : ''}`}
                  disabled={isDisabled(d)}
                  onClick={() => pick(d)}
                  aria-label={longDate(d)}
                  aria-pressed={value === toISODate(d)}
                >
                  {d.getDate()}
                </button>
              ) : (
                <span key={i} />
              )
            )}
          </div>
          {note && <p className="datepicker__note">{note}</p>}
        </div>
      )}
    </div>
  );
}
