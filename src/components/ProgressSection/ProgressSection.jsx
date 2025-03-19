import { Card, CardContent, CardHeader, Typography, LinearProgress, Grid } from "@mui/material";
import { DollarSign } from "lucide-react";
import styles from "./ProgressSection.module.css";

const ProgressSection = ({ userData }) => {
  const { currentSales, monthlyGoal, commissionRate } = userData;

  const progress = Math.min((currentSales / monthlyGoal) * 100, 100); // Asegurar que no pase de 100%
  const commissionEarned = (currentSales * (commissionRate / 100)).toFixed(2);

  return (
    <Card variant="outlined" className={styles.card}>
      <CardHeader title={<><DollarSign size={18} /> Progreso</>} />
      <CardContent>
        <LinearProgress variant="determinate" value={progress} className={styles.progressBar} />
        <Grid container spacing={2} className={styles.progressInfo}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">Progreso</Typography>
            <Typography variant="h6">{progress.toFixed(2)}%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">Comisión Ganada</Typography>
            <Typography variant="h6">${commissionEarned}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProgressSection;
