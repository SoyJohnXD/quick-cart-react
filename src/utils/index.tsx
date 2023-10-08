export function currencyFormatter(currency: string, value: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 2,
    currency,
  });
  return formatter.format(value);
}

export const stringToKebabCase = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, "-");
};

export function kebabToString(text: string) {
  const words = text.split("-");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
