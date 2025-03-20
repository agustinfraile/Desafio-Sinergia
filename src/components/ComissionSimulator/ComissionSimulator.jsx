import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import ObjectivesSection from "../ObjectiveSection/ObjectiveSection";
import ActionPlanPanel from "../ActionPlanPanel/ActionPlanPanel";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import ProgressSection from "../ProgressSection/ProgressSection";
import ComissionForm from "../ComissionForm/ComissionForm";
import styles from "./ComissionSimulator.module.css";

export const ComissionSimulator = () => {
  const getCurrentMonth = () => {
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return months[new Date().getMonth()];
  };

  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData
      ? JSON.parse(savedData)
      : {
        name: "",
        month: getCurrentMonth(),
        avgTicket: 100,
        exchangeRate: 1,
        currentSales: 0,
        monthlyGoal: 10000,
        commissionRate: 15,
      };
  });

  const [activeSection, setActiveSection] = useState("data");
  const [showAllSections, setShowAllSections] = useState(false);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

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
            <ComissionForm onUpdateUserData={setUserData} setActiveSection={setActiveSection} getCurrentMonth={getCurrentMonth} className={styles.card} />
            <ProgressSection userData={userData} className={styles.card} />
            <ObjectivesSection userData={userData} className={styles.card} />
            <ActionPlanPanel userData={userData} className={styles.card} />
          </>
        ) : (
          <>
            {activeSection === "data" && <ComissionForm onUpdateUserData={setUserData} setActiveSection={setActiveSection} className={styles.card} />}
            {activeSection === "progress" && <ProgressSection userData={userData} className={styles.card} />}
            {activeSection === "objectives" && <ObjectivesSection userData={userData} className={styles.card} />}
            {activeSection === "plan" && <ActionPlanPanel userData={userData} className={styles.card} />}
          </>
        )}
      </div>
    </Container>
  );
};
