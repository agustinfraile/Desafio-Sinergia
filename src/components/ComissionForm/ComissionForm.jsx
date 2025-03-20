import { useState, useEffect } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid, Card, CardContent, Button } from "@mui/material";
import { Calendar } from "lucide-react";
import data from "../../data/data.json";
import styles from "./ComissionForm.module.css";

const ComissionForm = ({ onUpdateUserData, setActiveSection }) => {

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
                month: getCurrentMonth ? getCurrentMonth() : "Enero",
                avgTicket: 100,
                exchangeRate: 1,
                currentSales: 0,
                monthlyGoal: 10000,
                commissionRate: 15,
            };
    });

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData]);

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
        setActiveSection("progress");
    };

    return (
        <Card variant="outlined" className={styles.card}>
            <CardContent>
                
                <div className={styles.header}>
                    <Calendar size={20} className={styles.icon} />
                    <h3>Información del Usuario</h3>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <TextField fullWidth label="Tu Nombre" name="name" value={userData.name} onChange={handleChange} className={styles.inputField} />

                    
                    <FormControl fullWidth className={styles.inputField}>
                        <InputLabel>Mes</InputLabel>
                        <Select name="month" value={userData.month} onChange={handleChange}>
                            {months.map((month) => (
                                <MenuItem key={month} value={month}>{month}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    
                    <Grid container spacing={2} className={styles.gridContainer}>
                        <Grid item className={styles.gridItem}>
                            <TextField fullWidth label="Ticket Promedio ($)" name="avgTicket" value={userData.avgTicket} onChange={handleChange} className={styles.inputField} />
                        </Grid>
                        <Grid item className={styles.gridItem}>
                            <TextField fullWidth label="Tasa de Cambio" name="exchangeRate" value={userData.exchangeRate} onChange={handleChange} className={styles.inputField} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className={styles.gridContainer}>
                        <Grid item className={styles.gridItem}>
                            <TextField fullWidth label="Ventas Actuales ($)" name="currentSales" value={userData.currentSales} onChange={handleChange} className={styles.inputField} />
                        </Grid>
                        <Grid item className={styles.gridItem}>
                            <TextField fullWidth label="Meta Mensual ($)" name="monthlyGoal" value={userData.monthlyGoal} onChange={handleChange} className={styles.inputField} />
                        </Grid>
                    </Grid>

                    
                    <FormControl fullWidth className={styles.inputField}>
                        <InputLabel>Porcentaje de Comisión (%)</InputLabel>
                        <Select name="commissionRate" value={userData.commissionRate} onChange={handleChange}>
                            {Object.keys(data.commissions).map((key) => (
                                <MenuItem key={key} value={key}>{key}%</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button variant="contained" sx={{ backgroundColor: "#28a745", color: "white", "&:hover": { backgroundColor: "#218838" } }} type="submit">
                        Guardar Datos
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
};

export default ComissionForm;


