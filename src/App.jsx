import './styles/global.scss';
import { Teste } from './components/Teste'
import Button from '@material-ui/core/Button';

export function App() {
    return (
        <div>
            <Button className="mainButton" variant="contained">Default</Button>
            <Teste />
            
        </div>
    )
}