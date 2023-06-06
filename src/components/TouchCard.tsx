import { Paper, Typography, Divider } from '@mui/material';
import { ApiData } from '../store/api-context';

export default function TouchCard({ name, incantation, effect, type }: ApiData) {
    return (
        <Paper elevation={8} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem 1rem 1.5rem 1rem' }}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h6">{incantation}</Typography>
            <Divider sx={{ margin: '1rem 0' }} />
            <Typography variant="subtitle1">{type}</Typography>
            <Typography variant="body1">{effect}</Typography>
        </Paper >
    );
}
