import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="anitialiased border-b border-special-500 bg-special-800 py-2 px-4 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <Link href='/'>
                    <span className="text-xl anitialiased text-special-50">📝</span>
                </Link>
                <span className='text-xl anitialiased text-special-50'>Insert logo...</span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex text-special-50 text-sm border border-special-500 px-0 py-0 overflow-hidden rounded-md">
                <li className="px-4 py-2 border-r border-special-500 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                    Home
                </li>
                <li className="px-4 py-2 border-r border-special-500 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                    Tasks
                </li>
                <li className="px-4 py-2 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                    Settings
                </li>
            </ul>

            {/* Action Button */}
            <button className="bg-special-600 hover:bg-special-700 text-special-50 px-4 py-2 rounded-lg transition">
                <p className='text-sm'>Sign In</p>
            </button>
        </nav>
    )
}