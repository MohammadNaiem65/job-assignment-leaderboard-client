import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';

function App() {
    return (
        <main className='min-h-dvh bg-slate-200 text-slate-900'>
            <Navbar />

            <Suspense
                fallback={
                    <p className='mt-[18rem] text-center text-xl font-semibold'>
                        Loading...
                    </p>
                }
            >
                <Outlet />
            </Suspense>
        </main>
    );
}

export default App;
