export enum Direction {
  left = "left",
  right = "right",
}

export default function moving(dir: Direction, className: string): void {
  const el = document.getElementsByClassName(className);
  if (el[0]) {
    if (dir === "left") {
      el[0].scrollLeft -= 300;
    } else if (dir === "right") {
      el[0].scrollLeft += 300;
    }
  }
}
