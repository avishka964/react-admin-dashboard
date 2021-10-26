import React, { Fragment, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Chart from '../components/Charts/Charts';
import { productData } from '../data';
import { PhotoCamera } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
  display: 'none',
});

const Product = () => {
  const [status, setStatus] = useState('');
  const [stock, setStock] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
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
          {'Edit Product'}
        </Box>
      </div>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Chart
            data={productData}
            dataKey='sales'
            title='Sales Performance'
            grid
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Item>
            <List sx={{ width: '100%', marginBottom: '10px' }}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    variant='square'
                    alt='IPhone'
                    src='https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Apple IPhone'
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      001
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </List>
            <List>
              <ListItem sx={{ padding: '0px 15px' }}>
                <ListItemText primary='Sales' sx={{ maxWidth: '100px' }} />
                <ListItemText secondary='1200' />
              </ListItem>
              <ListItem sx={{ padding: '0px 15px' }}>
                <ListItemText primary='Active' sx={{ maxWidth: '100px' }} />
                <ListItemText secondary='Yes' />
              </ListItem>
              <ListItem sx={{ padding: '0px 15px' }}>
                <ListItemText primary='In-Stock' sx={{ maxWidth: '100px' }} />
                <ListItemText secondary='No' />
              </ListItem>
            </List>
          </Item>
        </Grid>
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
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>
                          Status
                        </InputLabel>
                        <Select
                          value={status}
                          label='Status'
                          name='status'
                          onChange={handleStatusChange}
                        >
                          <MenuItem value={'active'}>Active</MenuItem>
                          <MenuItem value={'inactive'}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>
                         In Stock
                        </InputLabel>
                        <Select
                          value={stock}
                          label='In Stock'
                          name='stock'
                          onChange={handleStockChange}
                        >
                          <MenuItem value={'yes'}>Yes</MenuItem>
                          <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                      </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <img
                          style={{ height: '100px', width:'100px', objectFit:'cover'}}
                          src='https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
                      UPDATE
                    </Button>
                  </CardActions>
                </form>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Product;
