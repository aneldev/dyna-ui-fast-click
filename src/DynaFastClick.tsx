import * as React from "react";

export interface IDynaFastClickProps {
	className?: string;
	nodeType?: string;
	touchTimeout?: number; // ms
	children: any;
	onClick?: () => void;
}

const CONSOLE_DEBUG: boolean = false;

export class DynaFastClick extends React.Component<IDynaFastClickProps> {
	static defaultProps: IDynaFastClickProps = {
		className: "",
		nodeType: "span",
		touchTimeout: 120,
		children: null,
		onClick: () => undefined,
	};

	constructor(props: IDynaFastClickProps) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchCancel = this.handleTouchCancel.bind(this);
	}

	private readonly baseClassName: string = "dyna-fast-click";
	private readonly className = (subClassName: string = "", active: boolean = true): string => active ? `${this.baseClassName}${subClassName}` : "";

	private touchStartTimer: any;
	private touchApplied: boolean = false;
	private touchEnded: number;

	private triggerClick(): void {
		this.props.onClick();
	}

	private handleClick(): void {
		if (CONSOLE_DEBUG) console.debug('handle - click');
		if (this.touchApplied) {
			this.touchApplied = false;
			return;
		}
		this.touchApplied = false;
		this.triggerClick();
	}

	private handleTouchStart(): void {
		if (CONSOLE_DEBUG) console.debug('this.props.touchTimeout',this.props.touchTimeout);
		this.touchApplied = true;
		this.touchStartTimer = setTimeout(() => {
			this.triggerClick();
		}, this.props.touchTimeout);
		if (CONSOLE_DEBUG) console.debug('handle - start');
	}

	private handleTouchEnd(): void {
		if (CONSOLE_DEBUG) console.debug('handle - end');
		this.touchEnded = Number(new Date);
	}

	private handleTouchMove(): void {
		if (CONSOLE_DEBUG) console.debug('handle - move');
		clearTimeout(this.touchStartTimer);
	}

	private handleTouchCancel(): void {
		if (CONSOLE_DEBUG) console.debug('handle - cancel');
		clearTimeout(this.touchStartTimer);
	}

	public render(): JSX.Element {
		const {
			className: userClassName,
			nodeType: NodeType,
			children,
		} = this.props;

		const className: string = [
			userClassName,
			this.className(),
		].join(' ').trim();

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

