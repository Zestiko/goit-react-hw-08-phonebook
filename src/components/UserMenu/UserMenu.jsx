import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.thunk';
import css from './UserMenu.module.css'
export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      {/* {user.name} */}
      <p className={css.username}>Welcome, Email</p>

      <button type="button" onClick={() => {
        console.log(axios.defaults.headers.common.Authorization);
         dispatch(logOut());
      }
       }>
        Logout
      </button>
    </div>
  );
}