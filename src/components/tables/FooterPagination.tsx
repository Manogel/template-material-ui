import React from 'react';

import { TablePagination, TablePaginationProps } from '@material-ui/core';

type IParams = TablePaginationProps & {
  component?: string;
};

const FooterPagination: React.FC<IParams> = (props) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      labelRowsPerPage="Linhas por pagina"
      labelDisplayedRows={(paginationInfo) =>
        `${paginationInfo.from}-${paginationInfo.to} de ${paginationInfo.count}`
      }
      {...props}
    />
  );
};

FooterPagination.defaultProps = {
  component: 'div',
};

export default FooterPagination;
