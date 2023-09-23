export default function Button({
  children,
  className = "",
  // disabled = false,
  loading = false,
  ...props
}: any) {
  return (
    <button
      {...props}
      // disabled={disabled}
      className={`${className} min-h-8 rounded-lg px-3 ${
        loading ? "cursor-not-allowed opacity-50" : ""
      } disabled:bg-grey disabled:text-black/70  `}
    >
      {loading ? <Spinner /> : <>{children}</>}
    </button>
  );
}

export function OutlineButton({
  children,
  className = "",
  loading = false,
  ...props
}: any) {
  return (
    <button {...props} className={`${className} h-10  border px-5 `}>
      {loading ? <Spinner /> : <>{children}</>}
    </button>
  );
}

export function Spinner({ borderColor = "border-white" }) {
  return (
    <div
      className={`animate-spin rounded-full border-solid border-t-transparent  dark:border-t-white/70 ${borderColor} dark:border-dark-charcoal mx-auto h-5 w-5 border-2`}
    ></div>
  );
}
