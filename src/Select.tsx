// @ts-ignore
import * as React from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import { FieldProps } from 'formik';

export interface SelectProps extends FieldProps, MuiSelectProps {}

const Select: React.ComponentType<SelectProps> = ({
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
    <MuiSelect
      disabled={isSubmitting || disabled}
      {...props}
      {...field}
      onBlur={handleBlur}
    />
  );
};

Select.displayName = 'FormikMaterialUISelect';

export default Select;
