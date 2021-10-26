import React, { Fragment } from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const WidgetSmall = () => {
  return (
    <Fragment>
      <Item>
        <Typography sx={{ fontSize: 15 }} color='text.secondary' gutterBottom>
          New Users
        </Typography>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
          <ListItem
            alignItems='flex-start'
            secondaryAction={
              <Button edge='end' variant='outlined' size='small'>
                View
              </Button>
            }
          >
            <ListItemAvatar>
              <Avatar
                alt='avatar'
                src='https://mui.com/static/images/avatar/1.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Remy Sharp'
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Software Engineer
                </Typography>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem
            alignItems='flex-start'
            secondaryAction={
              <Button edge='end' variant='outlined' size='small'>
                View
              </Button>
            }
          >
            <ListItemAvatar>
              <Avatar
                alt='avatar'
                src='https://mui.com/static/images/avatar/2.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Travis Howard'
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Accountant
                </Typography>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem
            alignItems='flex-start'
            secondaryAction={
              <Button edge='end' variant='outlined' size='small'>
                View
              </Button>
            }
          >
            <ListItemAvatar>
              <Avatar
                alt='avatar'
                src='https://mui.com/static/images/avatar/3.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Cindy Baker'
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Journalist
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Item>
    </Fragment>
  );
};

export default WidgetSmall;
