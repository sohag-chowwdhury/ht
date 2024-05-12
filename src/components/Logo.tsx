import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M15,0.13c-1.13-0.4-2.37,0.19-2.78,1.32L4.17,24.07c-0.4,1.13,0.19,2.37,1.32,2.78l0,0c1.13,0.4,2.37-0.19,2.78-1.32
      L16.31,2.9C16.72,1.77,16.13,0.53,15,0.13z
      M20.04,8.34L20.04,8.34c-1.13-0.4-2.37,0.19-2.78,1.32l-3.99,11.22c-0.4,1.13,0.19,2.37,1.32,2.78v0
      c1.13,0.4,2.37-0.19,2.78-1.32l3.99-11.22C21.76,9.99,21.17,8.74,20.04,8.34z
      M29.14,5.16L29.14,5.16c-1.13-0.4-2.37,0.19-2.78,1.32L18.32,29.1c-0.4,1.13,0.19,2.37,1.32,2.78h0
      c1.13,0.4,2.37-0.19,2.78-1.32l8.05-22.62C30.86,6.8,30.27,5.56,29.14,5.16z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 140 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M38,28.06V3.46h4.36v10.37h5.19V3.46h4.36v24.6h-4.36v-10.72h-5.19v10.72h-4.36Z
          M55.29,3.46h13.91v3.51h-4.77v21.09h-4.36V6.97h-4.77v-3.51Z
          M86.69,20.18v2c0,3.55-2.68,5.87-6.83,5.87h-7.29V3.46h6.91c4.16,0,6.83,2.32,6.83,5.87v1.3c0,2.21-1.03,3.8-2.92,4.71,2.1.84,3.29,2.5,3.29,4.85ZM76.94,6.97v6.68h1.93c2.1,0,3.09-.84,3.09-2.64v-1.76c0-1.44-.99-2.28-2.68-2.28h-2.35ZM82.33,19.8c0-1.79-.99-2.64-3.09-2.64h-2.31v7.38h2.72c1.69,0,2.68-.84,2.68-2.29v-2.46Z
          M104.51,3.46l-5.84,14.3v10.3h-4.36v-10.3l-5.84-14.3h4.65l3.37,9.38,3.46-9.38h4.57Z
          M106.33,3.46h13.91v3.51h-4.77v21.09h-4.36V6.97h-4.77v-3.51Z
          M123.61,3.46h12.39v3.51h-8.03v6.85h6.38v3.51h-6.38v7.21h8.03v3.51h-12.39V3.46Z"
      />
    </svg>
  )
}
