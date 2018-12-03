import {createGlobalStyle} from 'styled-components';
import {theme} from '@/utils/ui/theme';

export default createGlobalStyle`
	body {
		font-family: LetsEatStd, Helvetica Neue, Helvetica;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}
	textarea:focus,
	input:focus,
	button:focus {
		outline: none;
	}
	::selection {
		color: rgba(255, 255, 255, 0.9);
		background: rgba(0, 0, 0, 0.9);
	}
	::-moz-selection {
		color: rgba(255, 255, 255, 0.9);
		background: rgba(0, 0, 0, 0.9);
	}
	#nprogress {
					pointer-events: none;
				}
				#nprogress .bar {
					background: ${theme.colors.Cta};
					position: fixed;
					z-index: 1031;
					top: 0;
					left: 0;
					width: 100%;
					height: 4px;
				}
				#nprogress .peg {
					display: block;
					position: absolute;
					right: 0px;
					width: 100px;
					height: 100%;
					opacity: 1;
					-webkit-transform: rotate(3deg) translate(0px, -4px);
					-ms-transform: rotate(3deg) translate(0px, -4px);
					transform: rotate(3deg) translate(0px, -4px);
				}
				#nprogress .spinner {
					display: none;
					position: fixed;
					z-index: 1031;
					top: 15px;
					right: 15px;
				}
				#nprogress .spinner-icon {
					width: 18px;
					height: 18px;
					box-sizing: border-box;
					border: solid 2px transparent;
					border-top-color: ${theme.colors.Cta};
					border-left-color: ${theme.colors.Cta};
					border-radius: 50%;
					-webkit-animation: nprogresss-spinner 400ms linear infinite;
					animation: nprogress-spinner 400ms linear infinite;
				}
				.nprogress-custom-parent {
					overflow: hidden;
					position: relative;
				}
				.nprogress-custom-parent #nprogress .spinner,
				.nprogress-custom-parent #nprogress .bar {
					position: absolute;
				}
				@-webkit-keyframes nprogress-spinner {
					0% {
						-webkit-transform: rotate(0deg);
					}
					100% {
						-webkit-transform: rotate(360deg);
					}
				}
				@keyframes nprogress-spinner {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
`;
