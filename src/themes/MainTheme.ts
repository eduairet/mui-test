import { Theme, createTheme } from '@mui/material';

const MainTheme: Theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'h1' },
                    style: { fontWeight: 'bold' }
                },
                {
                    props: { variant: 'h2' },
                    style: { fontWeight: 'bold' }
                },
                {
                    props: { variant: 'h3' },
                    style: { fontWeight: 'bold' }
                },
                {
                    props: { variant: 'h4' },
                    style: { fontWeight: 'bold' }
                },
                {
                    props: { variant: 'h5' },
                    style: { fontWeight: 'bold' }
                },
                {
                    props: { variant: 'subtitle1' },
                    style: { fontSize: '1.5rem', fontWeight: 'bold' }
                }
            ]
        }

    }
});

export default MainTheme;