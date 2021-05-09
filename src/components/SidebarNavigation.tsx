import type { FC } from 'react';
import Link from 'next/link';
import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const SIDEBAR_WIDTH = 400;

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: SIDEBAR_WIDTH,
    height: '100vh',
    position: 'fixed',
    display: 'flex',
    alignItems: 'left',
    zIndex: 10,
    padding: '0px 100px',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: palette.common.white,
    transition: 'width 0.5s',
    '& h1': {
      fontSize: '3rem',
      marginTop: -120,
      marginBottom: 0,
      fontWeight: 700,
    },
    '& ul ': {
      listStyle: 'none',
      padding: 0,
      '& li': {
        marginTop: 10,
        '& a': {
          letterSpacing: 2,
          color: palette.primary.light,
          display: 'inline-block',
          textDecoration: 'none',
          transition: 'all .3s ease',
          fontSize: 15,
        },
      },
    },
  },
  hide: {
    width: 0,
    padding: 0,
    transition: 'all 0.5s',
    '& h1, nav': {
      opacity: 0,
    },
  },
  show: {
    width: SIDEBAR_WIDTH,
    padding: '0px 100px',
    transition: 'all 0.5s',
    '& h1, nav': {
      opacity: 1,
      transition: 'all 2s',
    },
  },
}));

interface IProps {
  isShowSideMenu: boolean;
}

export const SidebarNavigation: FC<IProps> = props => {
  const { isShowSideMenu } = props;
  const classes = useStyles();
  return (
    <section
      className={clsx(classes.root, {
        [classes.show]: isShowSideMenu,
        [classes.hide]: !isShowSideMenu,
      })}
    >
      <Typography variant="h1" component="h1">
        JParin
      </Typography>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
