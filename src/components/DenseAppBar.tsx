import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ElectricBolt } from '@mui/icons-material';
import { ApiContext } from "../store/api-context";

export default function DenseAppBar() {
    const apiCtx = useContext(ApiContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Cast Spell"
                        sx={{ mr: 2 }}
                        onClick={(e) => { if (apiCtx) apiCtx.addElements() }}
                    >
                        <ElectricBolt />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Spells
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}