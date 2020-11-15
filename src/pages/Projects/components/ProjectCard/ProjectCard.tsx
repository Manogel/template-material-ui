import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';
import { format } from 'date-fns';

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors,
  CardProps,
} from '@material-ui/core';
import { IProject } from '@pages/Projects/data';
import getInitials from '@utils/getInitials';

import useStyles from './styles';

type IParams = CardProps & {
  project: IProject;
  className?: string;
};

const ProjectCard = (props: IParams) => {
  const { project, className, ...rest } = props;

  const classes = useStyles();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600],
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar
            alt="Author"
            className={classes.avatar}
            src={project.author.avatar}
          >
            {getInitials(project.author.name)}
          </Avatar>
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to="#"
              variant="h5"
            >
              {project.title}
            </Link>
            <Typography variant="body2">
              by{' '}
              <Link
                color="textPrimary"
                component={RouterLink}
                to="/users/1"
                variant="h6"
              >
                {project.author.name}
              </Link>
            </Typography>
          </div>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {project.currency}
            {project.price}
          </Typography>
          <Typography variant="body2">Project price</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{project.members}</Typography>
          <Typography variant="body2">Team members</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {format(project.start_date, 'dd MMMM yyyy')}
          </Typography>
          <Typography variant="body2">Project started</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {format(project.end_date, 'dd MMMM yyyy')}
          </Typography>
          <Typography variant="body2">Project deadline</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{
              color: statusColors[project.status],
            }}
            variant="h6"
          >
            {project.status}
          </Typography>
          <Typography variant="body2">Project status</Typography>
        </div>
        <div className={classes.actions}>
          <Button color="primary" size="small" variant="outlined">
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
