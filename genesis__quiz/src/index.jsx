import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import "./utils/i18n";

const element = document.querySelector('#root');

createRoot(element).render(<Root />);