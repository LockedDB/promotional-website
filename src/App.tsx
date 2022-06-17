import { useContext } from 'react';
import { ThemeContext } from './components/Theme';

function App() {
	const { darkMode, toogleTheme } = useContext(ThemeContext);

	// Set background color using theme
	document.body.style.backgroundColor = darkMode ? 'var(--smoky-black)' : 'var(--white)';

	return (
		<div>
			<button type="button" onClick={() => toogleTheme()}>
				Primary
			</button>
		</div>
	);
}

export default App;
