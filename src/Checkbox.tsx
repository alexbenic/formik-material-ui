// @ts-ignore
import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface CheckboxProps
  extends FieldProps,
    Omit<MuiCheckboxProps, 'form'> {}

const Checkbox: React.ComponentType<CheckboxProps> = ({
  field,
  form: { isSubmitting },
  disabled = false,
  onBlur,
  ...props
}) => {
  const handleBlur = (e: any) => {
    field.onBlur(e);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <MuiCheckbox
      disabled={isSubmitting || disabled}
      {...props}
      {...field}
      onBlur={handleBlur}
      value={field.value ? 'checked' : ''}
    />
  );
};

Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
