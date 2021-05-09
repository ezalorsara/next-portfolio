import { useEffect, useState } from 'react';
import type { FC } from 'react';
import {
  useMediaQuery,
  useTheme,
  Button,
  makeStyles,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import dynamic from 'next/dynamic';

const useStyles = makeStyles(() => ({
  menuButton: {
    position: 'fixed',
    zIndex: 99,
    right: 0,
  },
}));

const SidebarNavigation = dynamic<any>(
  () =>
    import('@components/SidebarNavigation').then(mod => mod.SidebarNavigation),
  { ssr: false }
);

/** COMPONENT */
export const PageContainer: FC = props => {
  const { children } = props;
  const classes = useStyles();
  const { breakpoints } = useTheme();
  const isShowMenuIcon = useMediaQuery(breakpoints.down(1200), {
    noSsr: false,
  });
  const [isShowSideMenu, setIsShowSideMenu] = useState(true);

  const handleMenuToggle = () => {
    setIsShowSideMenu(prev => !prev);
  };

  useEffect(() => {
    setIsShowSideMenu(!isShowMenuIcon);
  }, [isShowMenuIcon]);

  return (
    <>
      {isShowMenuIcon && (
        <Button className={classes.menuButton} onClick={handleMenuToggle}>
          <MenuIcon />
        </Button>
      )}
      <Box component="div" flex={1}>
        {<SidebarNavigation isShowSideMenu={isShowSideMenu} />}

        {children}
      </Box>
    </>
  );
};
