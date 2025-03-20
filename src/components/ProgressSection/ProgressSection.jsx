import { Card, CardContent, Typography, Grid2, Box, LinearProgress } from "@mui/material";
import { TrendingUp } from "lucide-react";
import styles from "./ProgressSection.module.css";

const ProgressSection = ({ userData }) => {
  const { currentSales, monthlyGoal, commissionRate } = userData;

  const progress = Math.min((currentSales / monthlyGoal) * 100, 100);
  
  const earnedCommission = (currentSales * (commissionRate / 100)).toFixed(2);

  let progressColor;
  if (progress < 30) {
    progressColor = "#ff4d4f"; 
  } else if (progress < 80) {
    progressColor = "#f1c40f"; 
  } else {
    progressColor = "#2ecc71"; 
  }

  return (
    <Card variant="outlined" className={styles.card}>
      <CardContent>
        <Box display="flex" alignItems="center" className={styles.header}>
          <TrendingUp size={20} className={styles.icon} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: 1 }}>
            Simulador de Comisiones
          </Typography>
        </Box>

        <Box className={styles.progressContainer}>
          <div className={styles.progressLabel}>
            <Typography variant="body2">Progreso</Typography>
            <Typography variant="body2">{progress.toFixed(1)}%</Typography>
          </div>
          <LinearProgress
            variant="determinate"
            value={progress}
            className={styles.progressBar}
            sx={{ backgroundColor: "#e0e0e0", "& .MuiLinearProgress-bar": { backgroundColor: progressColor } }}
          />
        </Box>

        <div className={styles.grid}>
          <Grid2 item className={styles.dataBox}>
            <Typography variant="body2" color="textSecondary">
              Porcentaje de Comisión
            </Typography>
            <Typography variant="h5" className={styles.highlight}>
              {commissionRate}%
            </Typography>
          </Grid2>

          <Grid2 item className={styles.dataBox}>
            <Typography variant="body2" color="textSecondary">
              Comisión Ganada
            </Typography>
            <Typography variant="h5" className={styles.highlight}>
              ${earnedCommission}
            </Typography>
          </Grid2>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressSection;
