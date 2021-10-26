import React, { Fragment, useState } from 'react';
import { PhotoCamera } from '@mui/icons-material';
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
  display: 'none',
});

const NewProduct = () => {
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Fragment>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            p: 1,
            bgcolor: 'background.paper',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {'New Product'}
        </Box>
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Item>
          <Grid container justify='center' spacing={1}>
            <Grid item md={12}>
              <form>
                <CardContent>
                  <Grid item container spacing={1} justify='center'>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        label='Product Name'
                        variant='outlined'
                        fullWidth
                        name='productName'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        label='Count Stock'
                        variant='outlined'
                        fullWidth
                        type='number'
                        name='countStock'
                      />
                    </Grid>                 
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>
                          Status
                        </InputLabel>
                        <Select
                          value={status}
                          label='Status'
                          onChange={handleChange}
                        >
                          <MenuItem value={'active'}>Active</MenuItem>
                          <MenuItem value={'inactive'}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <img
                        style={{ height: '100px', width:'100px', objectFit:'cover'}}
                        src='https://via.placeholder.com/150'
                        alt='product'
                      />
                      <label htmlFor='icon-button-file'>
                        <Input
                          accept='image/*'
                          id='icon-button-file'
                          type='file'
                        />
                        <IconButton
                          color='primary'
                          aria-label='upload picture'
                          component='span'
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </Grid>                  
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button variant='contained' color='primary' type='Submit'>
                    CREATE
                  </Button>
                </CardActions>
              </form>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Fragment>
  );
};

export default NewProduct;
