import React, { forwardRef } from 'react';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';

import clsx from 'clsx';

import { ListItem, Button, Collapse, ListItemProps } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const CustomRouterLink = forwardRef<any, NavLinkProps>((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

type IParams = ListItemProps & {
  className?: string;
  depth: number;
  href: string;
  icon: React.FC<any>;
  label?: React.FC<any>;
  open?: boolean;
  title: string;
};

const NavigationListItem: React.FC<IParams> = (props) => {
  const {
    title,
    href,
    depth = 0,
    children,
    icon: Icon,
    className,
    open: openProp = false,
    label: Label,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(openProp);

  const handleToggle = () => {
    setOpen((state) => !state);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft,
  };

  if (children) {
    return (
      <ListItem className={clsx(classes.item, className)} disableGutters>
        <Button className={classes.button} onClick={handleToggle} style={style}>
          {Icon && <Icon className={classes.icon} size="20" />}
          {title}

          <div className={classes.label}>
            {Label && (
              <span>
                <Label />
              </span>
            )}
            {open ? (
              <ExpandLessIcon className={classes.expandIcon} color="inherit" />
            ) : (
              <ExpandMoreIcon className={classes.expandIcon} color="inherit" />
            )}
          </div>
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }
  return (
    <ListItem className={clsx(classes.itemLeaf, className)} disableGutters>
      <Button
        component={CustomRouterLink}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        to={href}
        activeClassName={classes.active}
        style={style}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        {title}
        {Label && (
          <span className={classes.label}>
            <Label />
          </span>
        )}
      </Button>
    </ListItem>
  );
};

export default NavigationListItem;
