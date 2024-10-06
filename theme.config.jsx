export default {
	logo: (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='currentColor'
				className='size-6'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z'
				/>
			</svg>

			<span style={{ marginLeft: '.4em', fontWeight: 700 }}>
				SNH48 Glossary
			</span>
		</>
	),
	color: {
		hue: 196,
		saturation: 77
	},
	project: {
		link: 'https://docs.google.com/spreadsheets/d/1NWwX2cwaSokpi1LamozhQd4KxQrehbomyN-q1kKUruk/htmlview#',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='currentColor'
				className='size-6'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
				/>
			</svg>
		)
	},
	editLink: {
		component: null
	},
	feedback: {
		content: null
	},
	footer: {
		content: <span>Built with 💙💜🧡💚 by shuber.</span>
	}
}
