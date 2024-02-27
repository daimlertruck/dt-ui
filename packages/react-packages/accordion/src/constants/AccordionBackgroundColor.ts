export const AccordionBackgroundColor = {
  White: 'white',
  Grey: 'grey',
} as const;

export type AccordionBackgroundColor =
  (typeof AccordionBackgroundColor)[keyof typeof AccordionBackgroundColor];
