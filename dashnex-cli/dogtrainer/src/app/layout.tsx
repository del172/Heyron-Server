import { DashnexClient } from '@/dashnex/client'
import '@/styles/tailwind.css'
import { AuthProvider } from '@dashnex/auth/client'
import { getOption } from '@dashnex/system'
import { RenderScripts } from '@dashnex/system/client'
import { ThemeProvider } from '@dashnex/ui/client'
import type { Metadata } from 'vinext/shims/metadata'

export const generateMetadata = async ({ params }: { params: Promise<any> }): Promise<Metadata> => {
  const appName = (await getOption('appName')) as { value?: string } | null

  return {
    metadataBase: new URL(
      `${process.env.NEXT_PUBLIC_APPLICATION_PROTOCOL}://${process.env.NEXT_PUBLIC_APPLICATION_DOMAIN}`
    ),
    title:
      appName && appName.value
        ? {
            template: `%s | ${appName?.value}`,
            default: appName?.value,
          }
        : undefined,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
      suppressHydrationWarning
    >
      <head></head>
      <body>
        <DashnexClient>
          <ThemeProvider>
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
          <RenderScripts />
        </DashnexClient>
      </body>
    </html>
  )
}
