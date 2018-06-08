import * as React from "react";
export interface IDynaFastClickProps {
    className?: string;
    nodeType?: string;
    touchTimeout?: number;
    children: any;
    onClick?: () => void;
}
export declare class DynaFastClick extends React.Component<IDynaFastClickProps> {
    static defaultProps: IDynaFastClickProps;
    constructor(props: IDynaFastClickProps);
    private touchStartTimer;
    private touchApplied;
    private touchEnded;
    private triggerClick;
    private handleClick;
    private handleTouchStart;
    private handleTouchEnd;
    private handleTouchMove;
    private handleTouchCancel;
    render(): JSX.Element;
}
