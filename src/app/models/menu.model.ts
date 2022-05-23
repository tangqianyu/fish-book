export interface Menu {
  text: string;
  link?: string;
  icon: string | null;
  children?: Menu[];
}
