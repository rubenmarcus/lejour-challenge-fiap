import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { forwardRef } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import DataCard from "../Card/DataCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export const PanelInvoice = (data) => {
  const classes = useStyles();
  const dataPanel = data.data;
  console.log("dataInvoice", dataPanel);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <h3> {dataPanel.invoices.total} Invoices</h3>
        </Grid>
        <Grid item xs={2}>
          <h3> {dataPanel.accepted.total} Invoices Aceitos</h3>
        </Grid>
        <Grid item xs={2}>
          <h3> {dataPanel.notAccepted.total} Invoices Recusados</h3>
        </Grid>
        <Grid item xs={2}>
          <h3> {dataPanel.costs.total} Custo Total</h3>
        </Grid>
        <Grid item xs={2}>
          <h3> {dataPanel.profit.total} Lucro Total</h3>
        </Grid>
        <Grid item xs={2}>
          <h3> {dataPanel.profit.net} Lucro Liquido</h3>
        </Grid>
      </Grid>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lucros x Custos por Mês
            </Typography>

            {LineChartComponent(dataPanel.charts.profitxcosts)}

            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className="mt-20">
      <Grid item xs={12}>
          <DataCard
            title={"Gráfico Valores por Serviço"}
            chartType="barInv"
            chartData={dataPanel.charts.Vendor}
          />
        </Grid>
        </div>
<div className="mt-20">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DataCard
            title={"Gráfico Lucro x Custo Porcentual"}
            chartType="pizza"
            chartData={dataPanel.charts.profitxcostsradial}
          />
        </Grid>
        <Grid item xs={6}>
          <DataCard
            title={"Gráfico Invoices Aceitos x Recusados Porcentual"}
            chartType="pizza"
            chartData={dataPanel.charts.invoices}
          />
        </Grid>

        <Grid item xs={6}>
          <DataCard
            title={"Gráfico Invoices por mês"}
            chartType="pizza"
            chartData={dataPanel.charts.invoicesbyMonth}
          />
        </Grid>

        <Grid item xs={6}>
          <DataCard
            title={"Gráfico Invoices por Serviço"}
            chartType="pizza"
            chartData={dataPanel.charts.InvoicesByVendor}
          />
        </Grid>
   
      </Grid>
      </div>
    </div>
  );
};

const LineChartComponent = (chartData) => {
  const strokeWidthT = [{ x: 120, y: 120, value: 340 }];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        height={450}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="15 15" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 450000]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="CustoTotal"
          stroke="#DB5D79"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="LucroBruto"
          stroke="#68BFB7"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="LucroLiquido"
          stroke="#84B8E2"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="LucroMedio"
          stroke="#EA8079"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
