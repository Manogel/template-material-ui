import React from 'react';

import clsx from 'clsx';
import { format } from 'date-fns';

import MyButton from '@components/MyButton';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  CardProps,
} from '@material-ui/core';
import getInitials from '@utils/getInitials';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-4',
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  avatar: {
    height: 100,
    width: 100,
    marginBottom: theme.spacing(1),
  },
  fileInput: {
    display: 'none',
  },
}));

type IParams = CardProps & {
  className?: string;
};

const Profile = ({ className, ...rest }: IParams) => {
  const classes = useStyles();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = React.useState<string>('');

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _file = e.target.files && e.target.files[0];

    if (_file) {
      setImagePreview(URL.createObjectURL(_file));
    }
  };

  const handleAttach = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={imagePreview || user.avatar}>
            {getInitials(user.name)}
          </Avatar>
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${format(Date.now(), 'HH:mm')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <MyButton
          color="primary"
          fullWidth
          size="small"
          variant="outlined"
          onClick={handleAttach}
        >
          Upload picture
        </MyButton>
      </CardActions>
      <input
        className={classes.fileInput}
        ref={fileInputRef}
        type="file"
        onChange={handleFileInputChange}
        accept="image/*"
      />
    </Card>
  );
};

export default Profile;
