import React, { useState } from 'react';

import Page from '@components/Page';
import Paginate from '@components/Paginate';
import SearchBar from '@components/SearchBar';
import { Typography } from '@material-ui/core';

import { Header, ProjectCard } from './components';
import projectsData from './data';
import useStyles from './styles';

const Projects = () => {
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [projects] = useState(projectsData);

  const handleFilter = (filters: any) => {
    console.log(filters);
  };
  const handleSearch = (value: string) => {
    console.log(value);
  };

  const onPageChange = (toPage: number) => {
    console.log(toPage);
  };

  return (
    <Page className={classes.root} title="Projects List">
      <Header />
      <SearchBar onFilter={handleFilter} onSearch={handleSearch} />
      <div className={classes.results}>
        <Typography color="textSecondary" gutterBottom variant="body2">
          {projects.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(projects.length / rowsPerPage)}
        </Typography>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate pageCount={3} onPageChange={onPageChange} />
      </div>
    </Page>
  );
};

export default Projects;
