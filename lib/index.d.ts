import { ComponentProps, FC } from "react";
export interface IClickOutside extends ComponentProps<"div"> {
    onClickOutside: (e: any) => void;
}
declare const ClickOutside: FC<IClickOutside>;
export default ClickOutside;
