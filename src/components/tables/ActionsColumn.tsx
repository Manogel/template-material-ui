import React from 'react';
import {
  Edit as EditIcon,
  Trash2 as TrashIcon,
  ArrowRight as ArrowRightIcon,
} from 'react-feather';

import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  danger: {
    color: theme.palette.error.light,
  },
}));

type IParams = {
  onTashPress?: () => void;
  onEditPress?: () => void;
  onArrowPress?: () => void;
};

const ActionsColumn: React.FC<IParams> = (props) => {
  const { onTashPress, onEditPress, onArrowPress } = props;
  const classes = useStyles();

  return (
    <>
      {onEditPress && (
        <IconButton color="default" onClick={onEditPress}>
          <EditIcon size={18} />
        </IconButton>
      )}
      {onTashPress && (
        <IconButton className={classes.danger} onClick={onTashPress}>
          <TrashIcon size={18} />
        </IconButton>
      )}
      {onArrowPress && (
        <IconButton onClick={onArrowPress}>
          <ArrowRightIcon size={18} />
        </IconButton>
      )}
    </>
  );
};

export default ActionsColumn;
