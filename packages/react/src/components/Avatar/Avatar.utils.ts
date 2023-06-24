export const getNameInitials = (name: string) => {
  const regex = /(\p{L}{1})\p{L}+/gu;
  const initials = [...name.matchAll(regex)] || [];
  const twoInitials = (
    (initials.shift()?.[1] ?? "") + (initials.pop()?.[1] ?? "")
  ).toUpperCase();
  return twoInitials;
};
