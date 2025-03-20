import { Card, CardContent, Typography } from "@mui/material";
import { User, Laptop, GraduationCap, Calendar } from "lucide-react";
import styles from "./ActionPlanPanel.module.css";

const ActionPlanPanel = ({ userData }) => {
    const { currentSales, monthlyGoal } = userData;
    const remainingSales = monthlyGoal - currentSales;

    if (remainingSales <= 0) {
        return (
            <Card variant="outlined" className={styles.card}>
                <CardContent className={styles.completed}>
                    <Typography variant="h6" className={styles.title}>🎉 ¡Meta Alcanzada!</Typography>
                    <Typography variant="body1">Has alcanzado tu objetivo de ventas. ¡Buen trabajo!</Typography>
                </CardContent>
            </Card>
        );
    }


    const avgTicket = userData.avgTicket || 100;
    const unitsToSell = Math.ceil(remainingSales / avgTicket);
    const newProspects = unitsToSell * 3;
    const weeklyPresentations = Math.ceil(newProspects / 4);
    const dailyProspects = Math.ceil(newProspects / 30);


    const progress = Math.min((currentSales / monthlyGoal) * 100, 100);


    let trainingRecommendation = "";
    if (progress < 25) {
        trainingRecommendation = "Enfócate en técnicas de prospección y construcción de pipeline.";
    } else if (progress < 50) {
        trainingRecommendation = "Mejora tus habilidades de presentación y manejo de objeciones.";
    } else if (progress < 75) {
        trainingRecommendation = "Trabaja en técnicas de cierre y estrategias de seguimiento.";
    } else {
        trainingRecommendation = "Desarrolla estrategias de upselling y generación de referidos.";
    }

    return (
        <Card variant="outlined" className={styles.card}>
            <CardContent>
                <Typography variant="h6" className={styles.title}>
                    ✅ Plan de Acción
                </Typography>

                <div className={styles.actionItem}>
                    <User size={20} />
                    <div>
                        <Typography className={styles.actionTitle}>Nuevos Prospectos</Typography>
                        <Typography variant="h5">{newProspects}</Typography>
                        <Typography className={styles.actionDescription}>Contactos a alcanzar</Typography>
                    </div>
                </div>

                <div className={styles.actionItem}>
                    <Laptop size={20} />
                    <div>
                        <Typography className={styles.actionTitle}>Presentaciones</Typography>
                        <Typography variant="h5">{weeklyPresentations}</Typography>
                        <Typography className={styles.actionDescription}>{weeklyPresentations} por semana</Typography>
                    </div>
                </div>

                <div className={styles.actionItem}>
                    <GraduationCap size={20} />
                    <div>
                        <Typography className={styles.actionTitle}>Enfoque de Capacitación</Typography>
                        <Typography className={styles.actionDescription}>
                            {trainingRecommendation}
                        </Typography>
                    </div>
                </div>

                <div className={styles.actionItem}>
                    <Calendar size={20} />
                    <div>
                        <Typography className={styles.actionTitle}>Actividad Diaria</Typography>
                        <Typography variant="h5">{dailyProspects}</Typography>
                        <Typography className={styles.actionDescription}>{dailyProspects} prospectos por día</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ActionPlanPanel;
