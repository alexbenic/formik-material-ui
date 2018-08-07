import React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () =>
  createStyles({
    root: {
      padding: 5,
      marginTop: 20,
    },
  });

function replacer(_: string, value: any) {
  // Filtering out properties
  if (value instanceof File) {
    return {
      size: value.size,
      name: value.name,
      type: value.type,
    };
  }
  return value;
}

interface Props extends WithStyles<typeof styles> {
  values: any;
}

const FormValues = ({ values, classes }: Props) => (
  <div className={classes.root}>
    <Typography variant="headline" component="h5">
      State
    </Typography>
    <Typography component="p">{JSON.stringify(values, replacer, 2)}</Typography>
  </div>
);

export default withStyles(styles)(FormValues);
