// type ButtonType = "primary" | "secondary" | "outline";

export default function Button({
  children,
  className = "",
  // disabled = false,
  type,
  loading = false,
  ...props
}: any) {
  const base =
    "min-h-8 rounded-lg   inline-block uppercase tracking-wide disabled:bg-grey disabled:text-black/70 ";
  const styles: any = {
    primary:
      base +
      " text-white  bg-primary px-6 py-3 font-semibold hover:bg-primary/90",
    pMedium:
      base +
      " px-8 py-3 text-white  text-sm font-medium  bg-primary hover:bg-primary/90",
    small: base + " px-2.5 py-1  text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  return (
    <button
      {...props}
      className={`${styles[type]} ${className}  ${
        loading ? "cursor-not-allowed opacity-50" : ""
      }  `}
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
