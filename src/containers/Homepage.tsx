import type { FC } from 'react';
import { makeStyles, Typography, Avatar, Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { PageContainer } from '@components/PageContainer';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  main: {
    width: '100%',
    minHeight: '100vh',
    float: 'left',
    position: 'relative',
    backgroundColor: palette.background.default,
    paddingLeft: 450,
    display: 'flex',
    alignItems: 'center',
    [breakpoints.down(1200)]: {
      paddingLeft: 0,
    },
    [breakpoints.down(600)]: {
      textAlign: 'center',
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      margin: '-100px auto 0px',
      '& .MuiTypography-subtitle1, .MuiTypography-h2': {
        marginLeft: 80,
      },

      [breakpoints.down(600)]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& .MuiTypography-h2': {
          margin: '20px auto 10px',
        },
        '& .MuiTypography-subtitle1': {
          margin: '0 auto',
        },
      },
    },
  },
  heroAvatar: {
    width: spacing(34),
    height: spacing(34),
    [breakpoints.down('md')]: {
      width: spacing(22),
      height: spacing(22),
    },
  },
  socialLink: {
    listStyle: 'none',
    marginLeft: 80,
    paddingLeft: 0,
    padding: 0,
    overflow: 'hidden',
    display: 'inline-block',
    [breakpoints.down(600)]: {
      marginLeft: 0,
    },
    '& li': {
      float: 'left',
      marginRight: 10,
      '& a': {
        color: palette.primary.light,
        '&:hover': {
          color: palette.primary.main,
        },
      },
    },
  },
}));

export const Homepage: FC = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <section className={classes.main}>
        <Container maxWidth="md">
          <div>
            <Avatar
              src="https://avatars.githubusercontent.com/u/6506275?v=4"
              className={classes.heroAvatar}
            />
          </div>
          <div>
            <Typography variant="h2" component="h4">
              Joed Parin
            </Typography>
            <Typography variant="subtitle1" component="p">
              Full Stack Developer based in Philippines with over 5 years of
              experience in the software industry..
            </Typography>
            <ul className={classes.socialLink}>
              <li>
                <a href="facebook.com/joed.sara" target="_blank">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://github.com/ezalorsara" target="_blank">
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </PageContainer>
  );
};
