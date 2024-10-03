import React, { useState, useEffect } from 'react';
import { motion, transform } from 'framer-motion';
import { styled } from '@mui/material/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    Card,
    CardContent,
    Collapse,
    Snackbar,
    Alert,
    useMediaQuery,
} from '@mui/material';
import { VideogameAsset, Cloud, Save } from '@mui/icons-material';
import '@fontsource/press-start-2p';
import { useTheme } from '@emotion/react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover } from 'react-icons/fa';
import LogoAtari from '../assets/logos_consolas/Atari_Logo.png';
import LogoCapcom from '../assets/logos_consolas/Capcom_Logo.png';
import LogoGameCube from '../assets/logos_consolas/Game_Cube_Logo.png';
import LogoGameBoyAdvanced from '../assets/logos_consolas/Game_Boy_Advanced_Logo.svg';
import LogoNeoGeo from '../assets/logos_consolas/Neo_Geo_Logo.svg';
import LogoNintendo64 from '../assets/logos_consolas/Nintendo_64_Logo.svg';
import LogoGameBoy from '../assets/logos_consolas/Nintendo_Game_Boy_Logo.svg';
import LogoPlaystation from '../assets/logos_consolas/PlayStation_1_Logo.svg';
import LogoPlaystation2 from '../assets/logos_consolas/PlayStation_2_Logo.svg';
import LogoPlaystation3 from '../assets/logos_consolas/PlayStation_3_Logo.svg';
import LogoPSP from '../assets/logos_consolas/PlayStation_Portable_Logo.svg';
import LogoDreamCast from '../assets/logos_consolas/Sega_Dreamcast_Logo.svg';
import LogoSegaMasterSystem from '../assets/logos_consolas/Sega_Master_System_Logo.svg';
import LogoSuperNintendo from '../assets/logos_consolas/Super_Nintendo_Logo.png';
import LogoWii from '../assets/logos_consolas/Wii_Logo.png';
import LogoXbox from '../assets/logos_consolas/Xbox_Logo.svg';
import PeoplePlayingGames from '../assets/People-playing-games.webp';





const StyledButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    transition: 'all 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 10px 4px rgba(255, 105, 135, .5)',
    },
}));

const GlowingCard = styled(Card)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)`,
    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
    transition: 'all 0.3s',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: `0 0 30px ${theme.palette.secondary.main}`,
    },
}));

const ConsoleImage = styled('img')({
    width: '100%',
    borderRadius: '15px',
    marginBottom: '20px',

    // Media query para dispositivos móviles
    '@media (max-width: 600px)': {
        width: '100%', // 100% en móviles
    },

    // Para pantallas más grandes puedes mantener el 50%
    '@media (min-width: 601px)': {
        width: '50%', // 50% en pantallas más grandes
    },
});

const BottomBar = styled(Box)(({ theme }) => ({
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const TopBar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.tooltip,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    overflow: 'hidden', // Asegúrate de que no se vea el texto cuando salga
}));

const SlidingText = styled(Typography)(({ theme }) => ({
    whiteSpace: 'nowrap',
    display: 'inline-block',
    animation: 'slide 10s linear infinite', // Ajusta la duración de la animación
    '&:hover': {
        animationPlayState: 'paused', // Pausa la animación al pasar el mouse
    },
    '@keyframes slide': {
        '0%': { transform: 'translateX(100%)' },   // Comienza completamente fuera de la pantalla (derecha)
        '100%': { transform: 'translateX(-100%)' }, // Se desliza completamente a la izquierda
    },
}));


const Home = () => {
    const [openFAQ, setOpenFAQ] = useState({});
    const [currentCustomer, setCurrentCustomer] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(true);
    const theme = useTheme();

    const customerNames = [
        "Juan Pérez", "María López", "Carlos García", "Ana Fernández", "Luis Rodríguez",
        "Marta Sánchez", "José Martínez", "Lucía Gómez", "Pedro Hernández", "Sofía Díaz"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCustomer((prev) => (prev + 1) % customerNames.length);
            setSnackbarOpen(true);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handleToggleFAQ = (index) => {
        setOpenFAQ((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <Box sx={{ overflow: 'hidden', pt: 10 }}>
            <TopBar color="transparent" elevation={0}>
                <Toolbar>
                    <SlidingText variant="h6">
                        Pago único de por vida, sin suscripciones, única instalación.
                    </SlidingText>
                </Toolbar>
            </TopBar>

            <Container maxWidth="lg" sx={{ mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Revive la Magia de los Clásicos
                </Typography>
                <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                    Mira este video de 1 minuto introductorio para descubrir el emulador.
                </Typography>
                {/* Video Embebido */}
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            width: 600,
                            height: 340,
                            backgroundColor: 'gray',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
                        }}
                    >
                        {/* Video embebido */}
                        <Typography variant="h6" color="white">Video Placeholder</Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <StyledButton variant="contained" size="large">
                        COMIENZA TU AVENTURA AHORA
                    </StyledButton>
                </Box>

                {/* Grid de Iconos */}
                <Grid container spacing={4} sx={{ mt: 6 }}>
                    {[
                        { icon: VideogameAsset, title: "500+ Juegos", description: "Acceso instantáneo a una biblioteca masiva de clásicos" },
                        { icon: Cloud, title: "Descarga Digital", description: "Sin esperas, sin hardware adicional. Juega al instante" },
                        { icon: Save, title: "Guarda tu Progreso", description: "Retoma tus aventuras donde las dejaste" }
                    ].map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <GlowingCard sx={{
                                borderRadius: 5,
                            }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <item.icon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                                    <Typography variant="h5" component="div" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </GlowingCard>
                        </Grid>
                    ))}
                </Grid>

                {/* Imagen y Texto de Diversión y Nostalgia */}
                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <ConsoleImage
                        src={PeoplePlayingGames}
                        alt="Retro Gaming"
                        sx={{
                            borderRadius: '10px',
                            marginBottom: '20px',
                            border: `4px solid ${theme.palette.primary.main}`,
                        }}
                    />
                    <Typography variant="h4" gutterBottom>
                        Diversión y Nostalgia
                    </Typography>
                    <Typography variant="h6" color="textSecondary" paragraph>
                        Miles de juegos en tu catálogo. ¡Disfruta de títulos icónicos desde tu PC o consola portátil!
                    </Typography>
                    <StyledButton variant="contained" size="large">
                        ¡EMPIEZA A JUGAR!
                    </StyledButton>
                </Box>

                {/* Grid de Consolas */}
                <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={2} justifyContent="center" columns={3}>
                        {Array.from(new Array(15)).map((_, index) => (
                            <Grid
                                item
                                xs={1}
                                key={index}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Box
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        backgroundColor: 'gray',
                                        borderRadius: 2,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img
                                        src={
                                            index === 0 ? LogoAtari :
                                                index === 1 ? LogoCapcom :
                                                    index === 2 ? LogoGameCube :
                                                        index === 3 ? LogoGameBoyAdvanced :
                                                            index === 4 ? LogoNeoGeo :
                                                                index === 5 ? LogoNintendo64 :
                                                                    index === 6 ? LogoGameBoy :
                                                                        index === 7 ? LogoPlaystation :
                                                                            index === 8 ? LogoPlaystation2 :
                                                                                index === 9 ? LogoPlaystation3 :
                                                                                    index === 10 ? LogoPSP :
                                                                                        index === 11 ? LogoDreamCast :
                                                                                            index === 12 ? LogoSegaMasterSystem :
                                                                                                index === 13 ? LogoSuperNintendo :
                                                                                                    index === 14 ? LogoWii :
                                                                                                        LogoXbox
                                        }
                                        alt={`Consola ${index + 1}`}
                                        style={{ width: '80%', height: 'auto' }} // Ajustar tamaño de la imagen
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>


                {/* Iconos de Pago */}
                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <StyledButton variant="contained" size="large">
                        ¡COMIENZA YA!
                    </StyledButton>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <FaCcVisa size={50} /> {/* Tamaño ajustado */}
                        <FaCcMastercard size={50} /> {/* Tamaño ajustado */}
                        <FaCcPaypal size={50} /> {/* Tamaño ajustado */}
                        <FaCcDiscover size={50} /> {/* Tamaño ajustado */}
                    </Box>
                </Box>

                {/* Preguntas Frecuentes */}
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Preguntas Frecuentes
                    </Typography>
                    {[
                        { question: "¿Cómo se descargan los juegos?", answer: "Inicia sesión en nuestra plataforma y descarga nuestro emulador. Todos los juegos están incluidos y listos para jugar." },
                        { question: "¿Puedo jugar en cualquier computadora?", answer: "Nuestro emulador es compatible con Windows, Mac y Linux. Juega en cualquier dispositivo de tu elección." },
                        { question: "¿Hay soporte técnico disponible?", answer: "Sí, ofrecemos soporte técnico 24/7 para garantizar una experiencia de juego sin problemas." }
                    ].map((item, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                            <Box
                                onClick={() => handleToggleFAQ(index)}
                                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                            >
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    {item.question}
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ transition: 'transform 0.3s', transform: openFAQ[index] ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                                    ›
                                </Typography>
                            </Box>
                            <Collapse in={openFAQ[index]}>
                                <Typography variant="body1" sx={{ mt: 1 }}>
                                    {item.answer}
                                </Typography>
                            </Collapse>
                        </Box>
                    ))}
                </Box>



            </Container>

            {/* Snackbar para cliente actual */}
            <Snackbar
                open={snackbarOpen}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{
                    mr: 2
                }}
            >
                <motion.div
                    key={customerNames[currentCustomer]}  // Cambia el key para que React lo trate como un nuevo componente al cambiar el nombre
                    initial={{ y: 100, opacity: 0 }}      // Comienza fuera de la pantalla (abajo)
                    animate={{ y: 0, opacity: 1 }}        // Anima hacia su posición final
                    exit={{ y: 100, opacity: 0 }}         // Anima de vuelta hacia abajo cuando desaparece
                    transition={{ duration: 0.5 }}        // Duración de la animación
                >



                    <Alert severity="success" sx={{ width: '90%', borderRadius: 10, }}>
                        {customerNames[currentCustomer]} ha comprado.
                    </Alert>
                </motion.div>
            </Snackbar>



            {/* Bottom Bar */}
            <BottomBar>
                <Typography variant="body2">
                    © 2024 RetroGaming Unleashed. Todos los derechos reservados.
                </Typography>
            </BottomBar>
        </Box>
    );
};

export default Home;
