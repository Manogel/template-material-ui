import React from 'react';

import {
  LabelDisplayedRowsArgs,
  TablePagination,
  TablePaginationProps,
} from '@material-ui/core';

type IParams = TablePaginationProps & {
  component?: string;
};

const FooterPagination: React.FC<IParams> = (props) => {
  const renderLabelDisplayedRows = (paginationInfo: LabelDisplayedRowsArgs) => {
    return `${paginationInfo.from}-${paginationInfo.to} de ${paginationInfo.count}`;
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      labelRowsPerPage="Linhas por pagina"
      labelDisplayedRows={renderLabelDisplayedRows}
      {...props}
    />
  );
};

FooterPagination.defaultProps = {
  component: 'div',
};

export default FooterPagination;
