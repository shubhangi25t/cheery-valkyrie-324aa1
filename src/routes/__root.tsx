import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Study Sessions — Learn with a clear plan',
      },
      {
        name: 'description',
        content:
          'Structured learning for Classes 8–12, JEE and NEET with complete modules, practice sheets, question banks and test series.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
        <Scripts />
      </body>
    </html>
  )
}
