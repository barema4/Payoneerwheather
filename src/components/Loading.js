import React from 'react';
import Container from '@material-ui/core/Container';

export default function Loading() {
  return (
    <React.Fragment>
     
      <Container maxWidth="sm" className="loading">
      <p className="load-data">Loading .......</p>
       
      </Container>
    </React.Fragment>
  );
}
