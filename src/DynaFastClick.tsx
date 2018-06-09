import * as React from "react";

export interface IDynaFastClickProps {
	className?: string;
	nodeType?: string;
	touchTimeout?: number; // ms
	children: any;
	onClick?: (event?: MouseEvent | TouchEvent) => void;
}

export class DynaFastClick extends React.Component<IDynaFastClickProps> {
	static defaultProps: IDynaFastClickProps = {
		className: "",
		nodeType: "span",
		touchTimeout: 120,
		children: null,
		onClick: (event?: MouseEvent | TouchEvent) => undefined,
	};

	constructor(props: IDynaFastClickProps) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchCancel = this.handleTouchCancel.bind(this);
	}

	private touchStartTimer: any;
	private touchApplied: boolean = false;
	private touchCanceled: boolean = false;

	private triggerClick(event: MouseEvent | TouchEvent): void {
		this.props.onClick(event);
	}

	private handleClick(event: MouseEvent): void {
		if (this.touchApplied) {
			this.touchApplied = false;
			return;
		}
		this.touchApplied = false;
		this.triggerClick(event);
	}

	private handleTouchStart(): void {
		this.touchCanceled = false;
		this.touchApplied = true;
	}

	private handleTouchEnd(event: TouchEvent): void {
		if (!this.touchCanceled) this.triggerClick(event);
	}

	private handleTouchMove(): void {
		this.touchCanceled = true;
	}

	private handleTouchCancel(): void {
		this.touchCanceled = true;
	}

	public render(): JSX.Element {
		const {
			className,
			nodeType: NodeType,
			children,
		} = this.props;

		return (
			<NodeType
				className={className}
				onClick={this.handleClick}
				onTouchStart={this.handleTouchStart}
				onTouchEnd={this.handleTouchEnd}
				onTouchMove={this.handleTouchMove}
				onTouchCancel={this.handleTouchCancel}
			>
				{children}
			</NodeType>
		);
	}
}

