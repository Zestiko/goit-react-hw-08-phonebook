import css from './UserMenu.module.css'
export const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      {/* {user.name} */}
      <p className={css.username}>Welcome, Email</p>
      {/* onClick={() => dispatch(logOut())} */}
      <button type="button">Logout</button>
    </div>
  );
}