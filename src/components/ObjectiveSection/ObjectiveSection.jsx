import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { Target } from "lucide-react";
import styles from "./ObjectivesSection.module.css";

const ObjectivesSection = ({ userData }) => {
  const { currentSales, monthlyGoal, avgTicket, exchangeRate } = userData;

  const remainingSales = Math.max(monthlyGoal - currentSales, 0);
  const remainingSalesLocal = remainingSales * exchangeRate;
  const unitsToSell = remainingSales > 0 ? Math.ceil(remainingSales / avgTicket) : 0;

  const hasReachedGoal = remainingSales === 0;

  return (
    <Card variant="outlined" className={styles.card}>
      <CardContent>
        <Box display="flex" alignItems="center" className={styles.header}>
          <Target size={20} className={styles.icon} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: 1 }}>
            Objetivos Mensuales
          </Typography>
        </Box>

       
        <Grid container spacing={1} className={styles.grid}>
          <Grid item className={styles.dataBox}>
            <Typography variant="body2" color="textSecondary">
              Ventas Restantes
            </Typography>
            <Typography variant="h5" className={styles.highlight}>
              ${remainingSales.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ≈ {remainingSalesLocal.toLocaleString()} moneda local
            </Typography>
          </Grid>

          <Grid item className={styles.dataBox}>
            <Typography variant="body2" color="textSecondary">
              Unidades a Vender
            </Typography>
            <Typography variant="h5" className={styles.highlight}>
              {unitsToSell}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              @ ${avgTicket.toLocaleString()} cada una
            </Typography>
          </Grid>
        </Grid>

       
        <Box
          className={`${styles.progressSummary} ${hasReachedGoal ? styles.progressAchieved : styles.progressPending}`}
        >
          <Typography variant="body1" fontWeight="bold">
            {hasReachedGoal ? "¡Felicidades!" : "Resumen del Progreso"}
          </Typography>
          <Typography variant="body2">
            {hasReachedGoal
              ? `¡Has alcanzado tu meta mensual de $${monthlyGoal.toLocaleString()}! 🎉`
              : `Has vendido $${currentSales.toLocaleString()} de tu meta de $${monthlyGoal.toLocaleString()}. ¡Sigue así!`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ObjectivesSection;
