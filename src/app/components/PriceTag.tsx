/**
 * PriceTag — renders a price string like 'ש"ח 9,999' with ש"ח always on the LEFT.
 * Splits the string at the first space and uses an explicit LTR flex row,
 * bypassing all bidi algorithm ambiguity.
 */
export function PriceTag({
  price,
  className = "",
}: {
  price: string;
  className?: string;
}) {
  const spaceIdx = price.indexOf(" ");
  const currency = spaceIdx !== -1 ? price.slice(0, spaceIdx) : price;
  const amount = spaceIdx !== -1 ? price.slice(spaceIdx + 1) : "";

  return (
    <span
      className={`inline-flex flex-row items-baseline gap-[0.2em] ${className}`}
      style={{ direction: "ltr" }}
    >
      <span>{currency}</span>
      <span>{amount}</span>
    </span>
  );
}
