import React from 'react';

type TTitleProps = {
	children: React.ReactNode,
}

const Title: React.FC<TTitleProps> = (props): React.ReactElement => {
	return (
		<div className={'md:mb-0 md:mt-16'}>
			<div className={'mx-auto flex w-full max-w-6xl flex-col items-center justify-center'}>
				<div className={'mt-10 w-full'}>
					<div className={'flex w-full flex-col items-center justify-start text-left text-10xl font-black uppercase text-accent'}>
						<b className={'tabular-nums'}>
							{props.children}
						</b>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Title;
