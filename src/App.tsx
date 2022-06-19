import { ThemeProvider } from '@mui/material';
import { ThemeContext } from './components/Theme';
import { useGetTheme } from './components/Theme/hooks/use-get-theme.hook';

function App() {
	/* Obtain  current theme */
	const { colorMode, theme } = useGetTheme();

	/* Set bg color using theme mode */
	document.body.style.backgroundColor =
		theme.palette.mode == 'dark' ? 'var(--smoky-black)' : 'var(--white)';

	return (
		<ThemeProvider theme={theme}>
			<ThemeContext.Provider
				value={{ mode: theme.palette.mode, toogleColorMode: colorMode.toogleColorMode }}>
				<div>
					<button type="button" onClick={() => colorMode.toogleColorMode()}>
						Primary
					</button>
				</div>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;
