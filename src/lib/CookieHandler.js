import Cookies from 'universal-cookie';

const cookies = new Cookies();
const setAuth = async auth =>cookies.set('_TkN__', auth, { path: '/'});
const getAuth = ()=> cookies.get('_TkN__');

export { setAuth, getAuth };