import { useState } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid2, Card, CardContent } from "@mui/material";
import data from "../../data/data.json";
import styles from "./ComissionForm.module.css";


const ComissionForm = ({ onUpdateUserData }) => {
    const [userData, setUserData] = useState({
        name: "",
        month: "Marzo",
        avgTicket: 100,
        exchangeRate: 1,
        currentSales: 0,
        monthlyGoal: 10000,
        commissionRate: "15", 
    });

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUserData(userData);
    };

    return (
        <Card variant="outlined" className={styles.card}>
            <CardContent>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <TextField fullWidth label="Nombre" name="name" value={userData.name} onChange={handleChange} required />

    
                    <FormControl fullWidth>
                        <InputLabel>Mes</InputLabel>
                        <Select name="month" value={userData.month} onChange={handleChange}>
                            {months.map((month) => (
                                <MenuItem key={month} value={month}>{month}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Grid2 container spacing={2}>
                        <Grid2 item xs={6}><TextField fullWidth label="Ticket Promedio ($)" name="avgTicket" value={userData.avgTicket} onChange={handleChange} required /></Grid2>
                        <Grid2 item xs={6}><TextField fullWidth label="Tasa de Cambio" name="exchangeRate" value={userData.exchangeRate} onChange={handleChange} required /></Grid2>
                    </Grid2>

                    <Grid2 container spacing={2}>
                        <Grid2 item xs={6}><TextField fullWidth label="Ventas Actuales ($)" name="currentSales" value={userData.currentSales} onChange={handleChange} required /></Grid2>
                        <Grid2 item xs={6}><TextField fullWidth label="Meta Mensual ($)" name="monthlyGoal" value={userData.monthlyGoal} onChange={handleChange} required /></Grid2>
                    </Grid2>

                    <FormControl fullWidth>
                        <InputLabel>Porcentaje de Comisión (%)</InputLabel>
                        <Select name="commissionRate" value={userData.commissionRate} onChange={handleChange}>
                            {Object.keys(data.commissions).map((key) => (
                                <MenuItem key={key} value={key}>{key}%</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button variant="contained" color="primary" type="submit" className={styles.submitButton}>Guardar Datos</Button>
                </form>
            </CardContent>
        </Card>
    );
};


export default ComissionForm