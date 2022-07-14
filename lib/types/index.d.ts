import { FC } from "react";
export interface IClickOutside {
    onClickOutside: (e: any) => void;
}
declare const ClickOutside: FC<IClickOutside>;
export default ClickOutside;
