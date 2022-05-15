/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  adminButtonsArray,
  BUTTON_SCROLL_TO_THE_TOP_ACTION,
  buttonsArray,
  ButtonsProps,
  managerButtonsArray,
} from '../../../constants/buttons';
import { ROLES } from '../../../constants/roles';
import { RootState } from '../../../redux/store';
import { CustomButton } from '../../common';
import styles from './styles';

interface ButtonsMenuProps {}

function ButtonsMenu(props: ButtonsMenuProps) {
  const role = useSelector((state: RootState) => state.userReducer.roles);

  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { path, action } = e.currentTarget.dataset;
    if (path) {
      if (action && action === BUTTON_SCROLL_TO_THE_TOP_ACTION) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  };

  if (role === ROLES.ADMIN) {
    return (
      <>
        {adminButtonsArray.map(({ path, value, action }: ButtonsProps) => (
          <Link key={path} to={path} css={styles.linkStyle}>
            <CustomButton
              boxStyle={styles.boxStyle}
              css={styles.menuStyles}
              key={path}
              onClick={clickHandler}
              value={value}
              data-action={action}
              data-path={path}
            />
          </Link>
        ))}
      </>
    );
  }
  if (role === ROLES.MANAGER) {
    return (
      <>
        {managerButtonsArray.map(({ path, value, action }: ButtonsProps) => (
          <Link key={path} to={path} css={styles.linkStyle}>
            <CustomButton
              css={styles.menuStyles}
              key={path}
              onClick={clickHandler}
              data-action={action}
              data-path={path}
              value={value}
            />
          </Link>
        ))}
      </>
    );
  }
  return (
    <>
      {buttonsArray.map(({ path, value, action }: ButtonsProps) => (
        <Link key={path} to={path} css={styles.linkStyle}>
          <CustomButton
            css={styles.menuStyles}
            key={path}
            onClick={clickHandler}
            value={value}
            data-action={action}
            data-path={path}
          />
        </Link>
      ))}
    </>
  );
}
export default ButtonsMenu;
