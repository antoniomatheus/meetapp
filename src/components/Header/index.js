import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import { Container, Profile, Content, Button } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Antonio Matheus"
            />
          </Profile>
          <Button type="button" onClick={handleSignOut}>
            Sign out
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
