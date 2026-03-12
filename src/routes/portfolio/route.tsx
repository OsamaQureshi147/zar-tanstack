import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1 className="mt-10">Hello "/portfolio/__portfolio-layout"!</h1>
      <Outlet />
      <h2>Footer</h2>
    </div>
  )
}
