import { useState } from "react";
import { Container } from "@mui/material";
import ObjectivesSection from "../ObjectiveSection/ObjectiveSection";
import ActionPlanPanel from "../ActionPlanPanel/ActionPlanPanel";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import ProgressSection from "../ProgressSection/ProgressSection";
import ComissionForm from "../ComissionForm/ComissionForm";
import styles from "./ComissionSimulator.module.css"; // Importa los estilos

export const ComissionSimulator = () => {
  const getCurrentMonth = () => {
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return months[new Date().getMonth()];
  };

  const [activeSection, setActiveSection] = useState("data");
  const [showAllSections, setShowAllSections] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    month: getCurrentMonth(),
    avgTicket: 100,
    exchangeRate: 1,
    currentSales: 0,
    monthlyGoal: 10000,
    commissionRate: 15,
  });

  return (
    <Container maxWidth="sm" className={styles.container}>
      <NavigationHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        showAllSections={showAllSections}
        setShowAllSections={setShowAllSections}
      />

      <div className={styles.contentWrapper}>
        {showAllSections ? (
          <>
            <ComissionForm onUpdateUserData={setUserData} setActiveSection={setActiveSection} className={styles.card} />
            <ProgressSection userData={userData} className={styles.card} />
            <ObjectivesSection userData={userData} className={styles.card} />
            <ActionPlanPanel className={styles.card} />
          </>
        ) : (
          <>
            {activeSection === "data" && <ComissionForm onUpdateUserData={setUserData} setActiveSection={setActiveSection} className={styles.card} />}
            {activeSection === "progress" && <ProgressSection userData={userData} className={styles.card} />}
            {activeSection === "objectives" && <ObjectivesSection userData={userData} className={styles.card} />}
            {activeSection === "plan" && <ActionPlanPanel className={styles.card} />}
          </>
        )}
      </div>
    </Container>
  );
};
