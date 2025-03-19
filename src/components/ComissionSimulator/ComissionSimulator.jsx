import { useState } from "react";
import ComissionForm from "../ComissionForm/ComissionForm"
import ProgressSection from "../ProgressSection/ProgressSection";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import { Container } from "@mui/material";
import ObjectivesSection from "../ObjectiveSection/ObjectiveSection";
import ActionPlanPanel from "../ActionPlanPanel/ActionPlanPanel";


import styles from "./ComissionSimulator.module.css";

export const ComissionSimulator = () => {

  const [activeSection, setActiveSection] = useState("data");
  const [showAllSections, setShowAllSections] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    month: "Marzo",
    avgTicket: 100,
    exchangeRate: 1,
    currentSales: 0,
    monthlyGoal: 10000,
    commissionRate: 15, // Valor en %
  });

  return (
    <Container maxWidth="sm" className={styles.container}>
      {/* Navbar */}
      <NavigationHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        showAllSections={showAllSections}
        setShowAllSections={setShowAllSections}
      />

      {/* Contenido dinámico basado en la sección activa */}
      <div className={styles.contentWrapper}>
        {showAllSections ? (
          <>
            <ComissionForm onUpdateUserData={setUserData} />
            <ProgressSection userData={userData} />
            <ObjectivesSection userData={userData} />
            <ActionPlanPanel />
          </>
        ) : (
          <>
            {activeSection === "data" && <ComissionForm onUpdateUserData={setUserData} />}
            {activeSection === "progress" && <ProgressSection userData={userData} />}
            {activeSection === "objectives" && <ObjectivesSection userData={userData} />}
            {activeSection === "plan" && <ActionPlanPanel />}
          </>
        )}
      </div>
    </Container>
  );
};

