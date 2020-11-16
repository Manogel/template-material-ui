import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import clsx from 'clsx';
import { format } from 'date-fns';

import Label from '@components/Label';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  colors,
} from '@material-ui/core';

import logsData from './data';
import useStyles from './styles';

type IParams = IDivParams & {
  className?: string;
};

const Logs = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [logs] = useState(logsData);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card className={classes.card}>
        <CardHeader title="Customer logs" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner}>
              <Table>
                <TableBody>
                  {logs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className={classes.methodCell}>
                        <Typography variant="h6">{log.method}</Typography>
                      </TableCell>
                      <TableCell className={classes.statusCell}>
                        <Label
                          color={
                            log.status === 200
                              ? colors.green[600]
                              : colors.red[600]
                          }
                        >
                          {log.status}
                        </Label>
                      </TableCell>
                      <TableCell>{log.route}</TableCell>
                      <TableCell>{log.desc}</TableCell>
                      <TableCell align="right">{log.IP}</TableCell>
                      <TableCell align="right">
                        {format(log.created_at, "yyyy/MM/dd '|' HH:mm")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logs;
