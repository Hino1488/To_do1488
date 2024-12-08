import { Nav } from '../Nav/Nav';

export const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
       
        height: '100vh'
      }}
    >
      <Nav />
      {children}
    </div>
  );
};
