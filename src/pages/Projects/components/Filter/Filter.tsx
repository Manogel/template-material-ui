import React, { useState } from 'react';

import clsx from 'clsx';

import {
  Button,
  Chip,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import useStyles from './styles';

export type IFilterParams = {
  className?: string;
  onClose(value?: any): void;
  onFilter(filters?: any): void;
  open: boolean;
};

const Filter = (props: IFilterParams) => {
  const { open, onClose, onFilter, className, ...rest } = props;

  const classes = useStyles();

  const initialValues = {
    paymentStatus: '',
    tag: '',
    tags: ['Full-Time'],
    amount: [1, 7],
    projectStatus: 'ended',
    customerName: '',
    customerType: 'freelancer',
    customerEmail: '',
    customerPhone: '',
    customerAge: '',
  };

  const [expandProject, setExpandProject] = useState(true);
  const [expandCustomer, setExpandCustomer] = useState(false);
  const [values, setValues] = useState({ ...initialValues });

  const handleClear = () => {
    setValues({ ...initialValues });
  };

  const handleFieldChange = (event: any, field: any, value: any) => {
    event.persist && event.persist();
    setValues((state) => ({
      ...state,
      [field]: value,
    }));
  };

  const handleTagAdd = () => {
    setValues((state) => {
      const newValues = { ...state };

      if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
        newValues.tags = [...newValues.tags];
        newValues.tags.push(newValues.tag);
      }

      newValues.tag = '';

      return newValues;
    });
  };

  const handleTagDelete = (tag: any) => {
    setValues((state) => {
      const newValues = { ...state };

      newValues.tags = newValues.tags.filter((t) => t !== tag);

      return newValues;
    });
  };

  const handleToggleProject = () => {
    setExpandProject((state) => !state);
  };

  const handleToggleCustomer = () => {
    setExpandCustomer((state) => !state);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFilter && onFilter(values);
  };

  const paymentStatusOptions = ['Pending', 'Canceled', 'Completed', 'Rejected'];
  const customerAgeOption = ['18 - 30', '30 - 45', '50 - 60', '60+'];

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <form
        {...rest}
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}
      >
        <div className={classes.header}>
          <Button onClick={onClose} size="small">
            <CloseIcon className={classes.buttonIcon} />
            Close
          </Button>
        </div>
        <div className={classes.content}>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={handleToggleProject}
            >
              <Typography variant="h5">Project</Typography>
              {expandProject ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandProject}>
              <div className={classes.contentSectionContent}>
                <div className={classes.formGroup}>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Payment status"
                    margin="dense"
                    name="paymentStatus"
                    onChange={(event) =>
                      handleFieldChange(
                        event,
                        'paymentStatus',
                        event.target.value,
                      )
                    }
                    select
                    SelectProps={{ native: true }}
                    value={values.paymentStatus}
                    variant="outlined"
                  >
                    <option disabled value="" />
                    {paymentStatusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div className={classes.formGroup}>
                  <div className={classes.fieldGroup}>
                    <TextField
                      className={clsx(classes.field, classes.flexGrow)}
                      label="Filter Tags"
                      margin="dense"
                      name="tag"
                      onChange={(event) =>
                        handleFieldChange(event, 'tag', event.target.value)
                      }
                      value={values.tag}
                      variant="outlined"
                    />
                    <Button
                      className={classes.addButton}
                      onClick={handleTagAdd}
                      size="small"
                    >
                      <AddIcon />
                      Add
                    </Button>
                  </div>
                  <div className={classes.tags}>
                    {values.tags.map((tag) => (
                      <Chip
                        deleteIcon={<CloseIcon />}
                        key={tag}
                        label={tag}
                        onDelete={() => handleTagDelete(tag)}
                      />
                    ))}
                  </div>
                </div>
                <div className={classes.formGroup}>
                  <Typography component="p" gutterBottom variant="overline">
                    Project amount
                  </Typography>
                  <div className={classes.fieldGroup}>
                    <Typography className={classes.minAmount} variant="body1">
                      ${values.amount[0]}K
                    </Typography>
                    <Slider
                      className={classes.flexGrow}
                      max={20}
                      min={1}
                      onChange={(event, value) =>
                        handleFieldChange(event, 'amount', value)
                      }
                      value={values.amount}
                      valueLabelDisplay="auto"
                    />
                    <Typography className={classes.maxAmount} variant="body1">
                      ${values.amount[1]}K
                    </Typography>
                  </div>
                </div>
                <div className={classes.formGroup}>
                  <Typography component="p" gutterBottom variant="overline">
                    Project status
                  </Typography>
                  <div className={classes.fieldGroup}>
                    <RadioGroup
                      className={classes.radioGroup}
                      name="projectStatus"
                      onChange={(event) =>
                        handleFieldChange(
                          event,
                          'projectStatus',
                          event.target.value,
                        )
                      }
                      value={values.projectStatus}
                    >
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Ended"
                        value="ended"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="On-Going"
                        value="onGoing"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="In Review"
                        value="inReview"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Competed"
                        value="completed"
                      />
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={handleToggleCustomer}
            >
              <Typography variant="h5">Customer</Typography>
              {expandCustomer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandCustomer}>
              <div className={classes.contentSectionContent}>
                <div className={classes.contentSectionContent}>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Customer name"
                      margin="dense"
                      name="customerName"
                      onChange={(event) =>
                        handleFieldChange(
                          event,
                          'customerName',
                          event.target.value,
                        )
                      }
                      value={values.customerName}
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <ToggleButtonGroup
                      exclusive
                      onChange={(event, value) =>
                        value && handleFieldChange(event, 'customerType', value)
                      }
                      size="small"
                      value={values.customerType}
                    >
                      <ToggleButton color="primary" value="projectOwner">
                        Project owner
                      </ToggleButton>
                      <ToggleButton color="primary" value="freelancer">
                        Freelancer
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Email address"
                      margin="dense"
                      name="customerEmail"
                      onChange={(event) =>
                        handleFieldChange(
                          event,
                          'customerEmail',
                          event.target.value,
                        )
                      }
                      value={values.customerEmail}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Phone number"
                      margin="dense"
                      name="customerPhone"
                      onChange={(event) =>
                        handleFieldChange(
                          event,
                          'customerPhone',
                          event.target.value,
                        )
                      }
                      value={values.customerPhone}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Age"
                      margin="dense"
                      name="customerAge"
                      onChange={(event) =>
                        handleFieldChange(
                          event,
                          'customerAge',
                          event.target.value,
                        )
                      }
                      select
                      SelectProps={{ native: true }}
                      value={values.customerAge}
                      variant="outlined"
                    >
                      <option disabled value="" />
                      {customerAgeOption.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <div className={classes.actions}>
          <Button fullWidth onClick={handleClear} variant="contained">
            <DeleteIcon className={classes.buttonIcon} />
            Clear
          </Button>
          <Button color="primary" fullWidth type="submit" variant="contained">
            Apply filters
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

export default Filter;
