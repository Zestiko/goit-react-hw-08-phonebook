import axios from 'axios';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.thunk';
import css from './UserMenu.module.css'
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrapper}>
      {/* {user.name} */}
      <p className={css.username}>Welcome, {user.email}</p>

      <button
        type="button"
        onClick={() => {
          console.log(axios.defaults.headers.common.Authorization);
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}