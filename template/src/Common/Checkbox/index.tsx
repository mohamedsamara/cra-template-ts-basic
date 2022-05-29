/**
 *
 * Checkbox
 *
 */

import { ChangeEvent } from 'react';

interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = (props: CheckboxProps) => {
  const { id, label, checked, onChange } = props;

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    onChange(value);
  };

  return (
    <div className="checkbox">
      <input
        checked={checked}
        className="input-checkbox"
        id={id}
        onChange={_onChange}
        type="checkbox"
      />

      <label
        className="d-flex flex-row justify-content-between align-items-center cursor-pointer"
        htmlFor={id}
      >
        {checked ? (
          <span className="mx-2 text-success">
            <i className="fas fa-check-circle fa-lg" />
          </span>
        ) : (
          <span className="mx-2 text-black">
            <i className="fas fa-check-circle fa-lg" />
          </span>
        )}

        {label && <span className="text">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
