import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';
import {AnimatePresence, motion} from 'framer-motion';
import {WithYearn} from '@yearn-finance/web-lib/contexts';
import Header from 'components/common/Header';
import Meta from 'components/common/Meta';
import {GobblersContextApp} from 'contexts/useGobblers';
import {WalletContextApp} from 'contexts/useWallet';
import {YearnContextApp} from 'contexts/useYearn';

import	'../style.scss';

const transition = {duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67]};
const variants = {
	initial: {y: 20, opacity: 0},
	enter: {y: 0, opacity: 1, transition},
	exit: {y: -20, opacity: 0, transition}
};

function	WithLayout(props: AppProps): ReactElement {
	const	{Component, pageProps, router} = props;
	const	getLayout = (Component as any).getLayout || ((page: ReactElement): ReactElement => page);

	return (
		<div id={'app'} className={'mx-auto mb-0 flex max-w-6xl'}>
			<div className={'flex min-h-[100vh] w-full flex-col'}>
				<Header />
				<AnimatePresence mode={'wait'}>
					<motion.div
						key={router.asPath}
						initial={'initial'}
						animate={'enter'}
						exit={'exit'}
						className={'my-0 h-full'}
						variants={variants}>
						{getLayout(<Component router={props.router} {...pageProps} />)}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

function	MyApp(props: AppProps): ReactElement {
	const	{Component, pageProps} = props;

	return (
		<WithYearn
			options={{
				ui: {
					shouldUseThemes: false
				}
			}}>
			<YearnContextApp>
				<WalletContextApp>
					<GobblersContextApp>
						<>
							<Meta />
							<WithLayout
								Component={Component}
								pageProps={pageProps}
								router={props.router} />
						</>
					</GobblersContextApp>
				</WalletContextApp>
			</YearnContextApp>
		</WithYearn>
	);
}

export default MyApp;
