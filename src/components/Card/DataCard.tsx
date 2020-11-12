import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';

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
} from "recharts";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
  }),
);


interface DataCardProps {
  title: string;
  chartType: ChartDataTypes;
  chartData: Array<any>;
}

type ChartDataTypes = "bar" | "pizza";

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

const COLORS = ["#DB5D79", "#68BFB7", "#84B8E2", "#EA8079"];

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
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`} {name}
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

const PieChartComponent = (chartData) => {
  return (
    <PieChart width={450} height={350}>
      <Pie
        data={chartData}
        cx={250}
        cy={170}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={160}
        fill="#e48787"
      >
        {chartData.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
