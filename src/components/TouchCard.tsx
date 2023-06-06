import { Paper, Rating, Typography, Box, Divider } from '@mui/material';
import { ElectricBolt } from '@mui/icons-material';
import { ApiData } from '../store/api-context';

export default function TouchCard({ name, incantation, effect, type }: ApiData) {
    return (
        <Paper elevation={8} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem 1rem 1.5rem 1rem' }}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h6" sx={{ fontSize: '0.75rem', fontStyle: 'italic' }}>{incantation}</Typography>
            <Divider sx={{ margin: '1rem 0' }} />
            <Box>
                {Array.from({ length: 1 + Math.round(Math.random() * 5) }).map((_, i) => <ElectricBolt key={`star-${i}`} color='primary' />)}
            </Box>
            <Divider sx={{ margin: '1rem 0' }} />
            <Typography variant="subtitle1">{type}</Typography>
            <Typography variant="body1">{effect}</Typography>
            <Divider sx={{ margin: '1rem 0' }} />
            <Rating name="score" value={Math.random() * 5} readOnly precision={0.5} />
        </Paper >
    );
}
