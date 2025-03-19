import { useState } from "react";
import { Tabs, Tab, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, Eye, EyeOff } from "lucide-react";
import styles from "./NavigationHeader.module.css";

const NavigationHeader = ({ activeSection, setActiveSection, showAllSections, setShowAllSections }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = [
        { label: "User Data", value: "data" },
        { label: "Progress", value: "progress" },
        { label: "Objectives", value: "objectives" },
        { label: "Plan", value: "plan" },
    ];

    return (
        <AppBar position="sticky" color="primary" className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
                {/* Menú Hamburguesa (en caso de agregar más opciones en el futuro) */}
                <IconButton edge="start" color="inherit" onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu />
                </IconButton>

                {/* Título */}
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }} className={styles.title}>
                    Commission Planner
                </Typography>

                {/* Toggle para mostrar todas las secciones o solo una */}
                <IconButton edge="end" color="inherit" onClick={() => setShowAllSections(!showAllSections)}>
                    {showAllSections ? <EyeOff /> : <Eye />}
                </IconButton>
            </Toolbar>

            {/* Navegación por Secciones */}
            <Tabs
                value={sections.findIndex((s) => s.value === activeSection)}
                onChange={(e, newIndex) => setActiveSection(sections[newIndex].value)}
                variant="fullWidth"
                textColor="inherit"
                indicatorColor="secondary"
                className={styles.tabs}
            >
                {sections.map((section, index) => (
                    <Tab key={index} label={section.label} className={styles.tab} />
                ))}
            </Tabs>
        </AppBar>
    );
};

export default NavigationHeader;
