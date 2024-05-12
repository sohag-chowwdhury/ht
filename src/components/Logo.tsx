import { useId } from "react";
import clsx from "clsx";

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & {
  invert?: boolean;
  filled?: boolean;
}) {
  let id = useId();

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          "h-8 transition-all duration-300",
          invert ? "fill-white" : "fill-neutral-950",
          filled ? "w-8" : "w-0 group-hover/logo:w-8"
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? "stroke-white" : "stroke-neutral-950"}
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
  );
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & {
  invert?: boolean;
  filled?: boolean;
  fillOnHover?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && "group/logo", className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? "fill-white" : "fill-neutral-950"}
        d="M65.27,20.15v1.72c0,3.04-2.29,5.03-5.85,5.03h-6.24V5.83h5.92c3.56,0,5.85,1.99,5.85,5.03v1.11c0,1.9-.88,3.25-2.5,4.03,1.8.72,2.82,2.14,2.82,4.15ZM56.92,8.84v5.72h1.66c1.8,0,2.64-.72,2.64-2.26v-1.5c0-1.23-.85-1.96-2.29-1.96h-2.01ZM61.53,19.82c0-1.54-.85-2.26-2.64-2.26h-1.97v6.32h2.33c1.45,0,2.29-.72,2.29-1.96v-2.11Z
M80.54,5.83l-5.01,12.25v8.82h-3.74v-8.82l-5.01-12.25h3.98l2.89,8.04,2.96-8.04h3.91Z
M82.09,5.83h11.92v3.01h-4.09v18.06h-3.74V8.84h-4.09v-3.01Z
M37.71,5.83h11.92v3.01h-4.09v18.06h-3.74V8.84h-4.09v-3.01Z
M96.89,5.83h10.61v3.01h-6.87v5.87h5.46v3.01h-5.46v6.17h6.87v3.01h-10.61V5.83Z"
      />
    </svg>
  );
}
