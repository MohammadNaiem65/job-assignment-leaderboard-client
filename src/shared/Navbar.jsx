import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <section className='h-20 px-10 bg-slate-900 text-white flex justify-between items-center'>
            <Link to='/' className='text-2xl font-semibold italic'>Neina</Link>

            <div className='text-lg flex gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </section>
    );
}
