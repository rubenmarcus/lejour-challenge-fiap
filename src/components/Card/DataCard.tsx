import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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
  LabelList,
  ResponsiveContainer
} from "recharts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
  })
);

interface DataCardProps {
  title: string;
  chartType: ChartDataTypes;
  chartData: Array<any>;
}

type ChartDataTypes = "bar" | "pizza" | "line" | "barInv";

export default function DataCard(props: DataCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          {props.chartType == "bar" ? BarChartComponent(props.chartData) : ""}

          {props.chartType == "pizza" ? PieChartComponent(props.chartData) : ""}
          {props.chartType == "line" ? LineChartComponent(props.chartData) : ""}
          {props.chartType =="barInv"? BarChartInvComponent(props.chartData): ""}
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const COLORS = ["#DB5D79", "#68BFB7", "#84B8E2", "#EA8079", "#ccc916", "#03cefc", "#fc0362", "#7600f5", "#0f8a04","#b56407"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      width={150}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`} 
    </text>
  );
};

const BarChartComponent = (chartData) => {
  return (
    <BarChart
      width={450}
      height={350}
      data={chartData}
      margin={{ top: 5, right: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontSize: 12, width: 150 }} />
      <YAxis
        dataKey="value"
        domain={[0, 1000000]}
        tick={{ fontSize: 12, width: 150 }}
      />
      <Tooltip
        formatter={(value) => new Intl.NumberFormat("en").format(value)}
      />
      <Legend />
      <Bar dataKey="value" fill="#68BFB7" />
    </BarChart>
  );
};


const BarChartInvComponent = (chartData) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
    <BarChart
      data={chartData}
      margin={{ top: 5, right: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontSize: 12, width: 150 }} />
      <YAxis
        dataKey="CustoTotal"
        domain={[0, 1000000]}
        tick={{ fontSize: 12, width: 150 }}
      />
   
      <Tooltip
        formatter={(value) => new Intl.NumberFormat("en").format(value)}
      />
      <Legend />
      <Bar dataKey="LucroBruto" fill="#DB5D79" />
      <Bar dataKey="CustoTotal" fill="#68BFB7" />
      
   
      <Bar dataKey="LucroLiquido" fill="#84B8E2" />

    </BarChart>
    </ResponsiveContainer>
  );
};

const PieChartComponent = (chartData) => {
  return (
    <PieChart width={550} height={350}   margin={{ top: 5, right: 0, bottom: 5 }}>
      <Pie
        data={chartData}
        cx={250}
        cy={150}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={130}
        fill="#e48787"
      >
            <LabelList dataKey="name" position="top" />

        {chartData.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />

    </PieChart>
  );
};
const LineChartComponent = (chartData) => {
  return (
    <LineChart
      width={830}
      height={250}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );
};
