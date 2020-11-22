import React from 'react';
import {
  Edit as EditIcon,
  Trash2 as TrashIcon,
  ArrowRight as ArrowRightIcon,
  Eye as EyeIcon,
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
  onEyePress?: () => void;
};

const ActionsColumn: React.FC<IParams> = (props) => {
  const { onTashPress, onEditPress, onArrowPress, onEyePress } = props;
  const classes = useStyles();

  return (
    <>
      {onEyePress && (
        <IconButton onClick={onEyePress}>
          <EyeIcon size={18} />
        </IconButton>
      )}
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
