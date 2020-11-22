import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import ActionsColumn from '@components/tables/ActionsColumn';
import FooterPagination from '@components/tables/FooterPagination';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
  CardProps,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import getInitials from '@utils/getInitials';

import { IUserData } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

type IParams = CardProps & {
  className?: string;
  customers: IUserData[];
};

const Results = ({ className, customers, ...rest }: IParams) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1),
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1),
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setLimit(Number(event.target.value));
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  <Tooltip enterDelay={300} title="Ordenar">
                    <TableSortLabel
                      active
                      direction="desc"
                      onClick={() => {
                        //
                      }}
                    >
                      Name
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Avatar
                        className={classes.avatar}
                        src={customer.avatarUrl}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>
                    <ActionsColumn
                      onArrowPress={() => {
                        navigate('1');
                      }}
                      onEditPress={() => {
                        //
                      }}
                      onTashPress={() => {
                        //
                      }}
                      onEyePress={() => {
                        //
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <FooterPagination
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
      />
    </Card>
  );
};

export default Results;
