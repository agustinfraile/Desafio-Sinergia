import { AppBar, Toolbar, Tabs, Tab, IconButton, Typography } from "@mui/material";
import { User, TrendingUp, Target, ClipboardList, Eye, EyeOff } from "lucide-react";
import styles from "./NavigationHeader.module.css";
import { styled } from "@mui/material/styles";

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#f1f1f1",
  }
});

const NavigationHeader = ({ activeSection, setActiveSection, showAllSections, setShowAllSections }) => {
  const sections = [
    { label: "User Data", value: "data", icon: <User size={20} /> },
    { label: "Progress", value: "progress", icon: <TrendingUp size={20} /> },
    { label: "Objectives", value: "objectives", icon: <Target size={20} /> },
    { label: "Plan", value: "plan", icon: <ClipboardList size={20} /> },
  ];

  return (
    <AppBar position="sticky" color="primary" sx={{ backgroundColor: "#6e6e6e" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>Simulador de comisiones</Typography>
        <IconButton edge="end" color="inherit" onClick={() => setShowAllSections(!showAllSections)}>
          {showAllSections ? <EyeOff /> : <Eye />}
        </IconButton>
      </Toolbar>

      <div className={styles.tabsContainer}>
        <CustomTabs
          value={sections.findIndex((s) => s.value === activeSection)}
          onChange={(e, newIndex) => setActiveSection(sections[newIndex].value)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
          indicatorColor="secondary"
          className={styles.tabs}
        >
          {sections.map((section, index) => (
            <Tab key={index} icon={section.icon} />
          ))}
        </CustomTabs>
      </div>
    </AppBar>
  );
};

export default NavigationHeader;
