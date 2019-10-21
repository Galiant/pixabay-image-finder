import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  textField: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
  }
}));

const Search = () => {

  const classes = useStyles();

  const [values, setValues] = React.useState({
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '540549-d25cb47a0eadb7d4acfea6805',
    images: []
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
     <TextField
      name="searchText"
      value={values.searchText}
      onChange={handleChange('searchText')}
      label="Search for images"
      fullWidth={true}
      className={classes.textField}
    />
  );
}

export default Search;
