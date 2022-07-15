import React, { CSSProperties, FC, useEffect, useRef } from "react"

export interface IClickOutside {
  onClickOutside: (e: any) => void
  className?: string
  style?: CSSProperties
}

const ClickOutside: FC<IClickOutside> = ({
  children,
  onClickOutside,
  className,
  style,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isTouchRef = useRef<boolean>(false)

  const handle = (e: any) => {
    if (e.type === "touchend") isTouchRef.current = true
    if (e.type === "click" && isTouchRef.current) return

    const el = wrapperRef.current
    if (el && !el.contains(e.target)) onClickOutside?.(e)
  }

  useEffect(() => {
    document.addEventListener("touchend", handle, true)
    document.addEventListener("click", handle, true)
    return () => {
      document.removeEventListener("touchend", handle, true)
      document.removeEventListener("click", handle, true)
    }
  }, [])
  return (
    <div ref={wrapperRef} className={className} style={style}>
      {children}
    </div>
  )
}

export default ClickOutside

