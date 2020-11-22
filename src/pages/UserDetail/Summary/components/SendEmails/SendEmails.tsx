import React, { useState } from 'react';

import clsx from 'clsx';

import MyButton from '@components/MyButton';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  CardProps,
} from '@material-ui/core';
import MaiIcon from '@material-ui/icons/MailOutline';

import useStyles from './styles';

type IParams = CardProps & {
  className?: string;
};

const SendEmails = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const options = [
    'Resend last invoice',
    'Send password reset',
    'Send verification',
  ];

  const [option, setOption] = useState(options[0]);

  const handleChange = (event: any) => {
    event.persist();

    setOption(event.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Send emails" />
      <Divider />
      <CardContent className={classes.content}>
        <TextField
          fullWidth
          name="option"
          onChange={handleChange}
          select
          SelectProps={{ native: true }}
          value={option}
          variant="outlined"
        >
          {options.map((optionItem) => (
            <option key={optionItem} value={optionItem}>
              {optionItem}
            </option>
          ))}
        </TextField>
        <MyButton
          className={classes.sendButton}
          variant="contained"
          customColor="success"
          size="small"
          startIcon={<MaiIcon className={classes.mailIcon} />}
        >
          Send email
        </MyButton>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell className={classes.cell}>11/11/2020 | 06:11</TableCell>
              <TableCell className={classes.cell}>Order confirmation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SendEmails;
