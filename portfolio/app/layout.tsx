import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: '고동민 - Backend Developer Portfolio',
    description: '성실하고 책임감 있는 백엔드 개발자 고동민의 포트폴리오입니다.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko" className="h-full">
            <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900`}>
                {children}
            </body>
        </html>
    )
}