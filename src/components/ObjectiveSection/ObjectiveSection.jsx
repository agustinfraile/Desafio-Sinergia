import { Card, CardContent, CardHeader, Typography, TextField } from "@mui/material";
import { Calendar } from "lucide-react";
import styles from "./ObjectivesSection.module.css";


const ObjectivesSection = ({ userData }) => {
    const { monthlyGoal, currentSales, avgTicket } = userData;
    const remainingSales = monthlyGoal - currentSales;
    const unitsToSell = remainingSales > 0 ? Math.ceil(remainingSales / avgTicket) : 0;

    return (
        <Card variant="outlined" className={styles.card}>
            <CardHeader title={<><Calendar size={18} /> Objetivos Mensuales</>} />
            <CardContent>
                <Typography variant="h6">Ventas Restantes: ${remainingSales.toFixed(2)}</Typography>
                <Typography variant="h6">Unidades a Vender: {unitsToSell} @ ${avgTicket.toFixed(2)} c/u</Typography>
            </CardContent>
        </Card>
    );
};

export default ObjectivesSection;
