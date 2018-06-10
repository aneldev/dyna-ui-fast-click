import * as React from "react";
export interface IDynaFastClickProps {
    className?: string;
    nodeType?: string;
    children: any;
    onClick?: (event?: MouseEvent | TouchEvent) => void;
}
export declare class DynaFastClick extends React.Component<IDynaFastClickProps> {
    static defaultProps: IDynaFastClickProps;
    constructor(props: IDynaFastClickProps);
    private touchStartTimer;
    private touchApplied;
    private touchCanceled;
    private triggerClick;
    private handleClick;
    private handleTouchStart;
    private handleTouchEnd;
    private handleTouchMove;
    private handleTouchCancel;
    render(): JSX.Element;
}
